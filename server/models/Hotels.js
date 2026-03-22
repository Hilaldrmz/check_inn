const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    distance: {
        type: String,
        required: true,
        trim: true,
    },
    reservePrice: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            comment: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
                min: 0,
                max: 5,
            },
        },
    ],

    image: {
        type: [String],
        default: ["https://example.com/default-hotel-image.jpg"],
    },
    amenities: {
        type: [String],
        default: [],
    },
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room",
        },
    ],
});

module.exports = mongoose.model("Hotel", hotelSchema);
