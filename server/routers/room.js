const {
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getRooms,
} = require("../controllers/room.js");
const express = require("express");
const { verifyRole, verifyToken } = require("../middleware/verify.js");

const router = express.Router();

router.post(
    "/createRoom/:id/:hotelId",
    verifyToken,
    verifyRole("admin"),
    createRoom,
);
router.put("/updateRoom/:id", verifyToken, verifyRole("admin"), updateRoom);
router.delete(
    "/deleteRoom/:id/:hotelId",
    verifyToken,
    verifyRole("admin"),
    deleteRoom,
);
router.get("/getRoom/:id", getRoom);
router.get("/getRooms", getRooms);

module.exports = router;
