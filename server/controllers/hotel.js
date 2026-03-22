const Hotel = require("../models/Hotels.js");
const Room = require("../models/Room.js");

const createHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json({ message: "Hotel created successfully", hotel });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const updateHotel = async (req, res, next) => {
    const { id } = req.params;
    try {
        const hotel = await Hotel.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true },
        );
        res.status(200).json({ message: "Hotel updated successfully", hotel });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteHotel = async (req, res, next) => {
    const { id } = req.params;
    try {
        await Hotel.findByIdAndDelete(id);
        res.status(200).json({ message: "Hotel deleted successfully", hotel });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const getHotel = async (req, res, next) => {
    const { id } = req.params;
    try {
        const hotel = await Hotel.findById(id);
        res.status(200).json({ message: "Hotel fetched successfully", hotel });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    // return res.status(200).json({ others });
    try {
        const hotels = await Hotel.find({
            ...others,
            reservePrice: { $gte: min | 1, $lte: max | 999 },
        }).limit(req.query.limit);
        res.status(200).json({
            message: "Hotels fetched successfully",
            hotels,
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const typeByCount = async (req, res, next) => {
    try {
        const hotels = await Hotel.countDocuments({ type: "hotel" });
        const guesthouses = await Hotel.countDocuments({ type: "guesthouse" });
        const house = await Hotel.countDocuments({ type: "house" });
        const apartments = await Hotel.countDocuments({ type: "apartment" });
        const rooms = await Room.countDocuments();

        res.status(200).json({
            message: "Count fetched successfully",
            hotels,
            guesthouses,
            house,
            apartments,
            rooms,
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const typeByCity = async (req, res, next) => {
    try {
        const cities = req.query.cities.split(",");

        const hotel = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city });
            }),
        );

        res.status(200).json({ message: "Count fetched successfully", hotel });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getHotels,
    typeByCount,
    typeByCity,
};
