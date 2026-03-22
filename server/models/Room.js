const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        roomNumber: [
            {
                number: {
                    type: Number,
                    required: true,
                },
                unavailableDates: {
                    type: [Date],
                    default: [],
                },
            },
        ],
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: [String],
        },
        amenities: {
            type: [String],
            default: [],
        },
        maxGuests: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Room", roomSchema);
