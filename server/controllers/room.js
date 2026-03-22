const Hotel = require("../models/Hotels.js");
const Room = require("../models/Room.js");

const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
        const room = await Room.create(req.body);
        await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: room._id } });

        res.status(201).json({ message: "Room created successfully", room });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const updateRoom = async (req, res, next) => {
    try {
        const room = await Room.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true },
        );

        res.status(200).json({ message: "Room updated successfully", room });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
        await Room.findByIdAndDelete(req.params.id);
        await Hotel.findByIdAndUpdate(hotelId, {
            $pull: { rooms: req.params.id },
        });

        res.status(200).json({ message: "Room deleted successfully", room });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);

        res.status(200).json({ message: "Room fetched successfully", room });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();

        res.status(200).json({ message: "Rooms fetched successfully", rooms });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { createRoom, updateRoom, deleteRoom, getRoom, getRooms };
