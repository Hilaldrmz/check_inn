const {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getHotels,
    typeByCount,
    typeByCity,
} = require("../controllers/hotel.js");
const express = require("express");
const { verifyRole, verifyToken } = require("../middleware/verify.js");

const router = express.Router();

router.post("/createHotel", verifyToken, verifyRole("admin"), createHotel);
router.put("/updateHotel/:id", verifyToken, verifyRole("admin"), updateHotel);
router.delete(
    "/deleteHotel/:id",
    verifyToken,
    verifyRole("admin"),
    deleteHotel,
);
router.get("/getHotel/:id", getHotel);
router.get("/getHotels", getHotels);
router.get("/typeByCount", typeByCount);
router.get("/typeByCity", typeByCity);

// helper seed route (DEV only)
router.post("/seed", async (req, res) => {
    try {
        const hotels = req.body.hotels || [
            { name: "CheckInn Hotel", city: "Istanbul", type: "hotel", reservePrice: 150, rooms: 10 },
            { name: "CheckInn Guesthouse", city: "Ankara", type: "guesthouse", reservePrice: 80, rooms: 6 },
            { name: "CheckInn Apartment", city: "Izmir", type: "apartment", reservePrice: 120, rooms: 8 },
        ];
        const created = await Promise.all(hotels.map((hotel) => require("../models/Hotels.js").create(hotel)));
        res.status(201).json({ message: "Seed data created", created });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

router.get('/test', (req, res) => {
    res.status(200).send('Test route is working!');
});