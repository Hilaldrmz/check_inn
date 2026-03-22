const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ error: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: "Forbidden" });
        req.user = user;
        next();
    });
};

// const verifyUser = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.id === req.param.id || req.user.role) return next();
//         else return res.status(403).json({ error: 'Forbidden' });
//     });
// }
// const verifyAdmin = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.id === req.user.role) return next();
//         else return res.status(403).json({ error: 'Forbidden' });
//     });
// }

const verifyRole = (requiredRole) => {
    return (req, res, next) => {
        const { role } = req.user;

        if (role !== requiredRole) {
            return res
                .status(403)
                .json({ error: "Access denied: insufficient role" });
        }

        next();
    };
};

module.exports = { verifyToken, verifyRole };
