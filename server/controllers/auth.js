const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { username, email, password, country, city, role } = req.body;
    try {
        const oldUser = await User.findOne({
            email,
        });
        if (oldUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        if (!isEmail(email)) {
            return res.status(400).json({ message: "Invalid email" });
        }

        if (password.length < 6) {
            return res
                .status(400)
                .json({
                    message: "Password must be at least 6 characters long",
                });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { id: newUser._id, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" },
        );

        res.cookie("token", token, { httpOnly: true })
            .status(201)
            .json({ newUser, token });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email,
        });
        if (!user) {
            return res.status(400).json({ message: "User could not be found" });
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
            return res.status(400).json({ message: "Password is not correct" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" },
        );

        res.cookie("token", token, { httpOnly: true })
            .status(200)
            .json({ user, token });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

function isEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

module.exports = { register, login };
