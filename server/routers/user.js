const {
    updateUser,
    deleteUser,
    detailUser,
    allUser,
} = require("../controllers/user.js");
const express = require("express");
const { verifyRole, verifyToken } = require("../middleware/verify.js");

const router = express.Router();

router.get("/allUser", verifyToken, verifyRole("admin"), allUser);
router.get("/detailUser/:id", verifyToken, verifyRole("user"), detailUser);
router.put("/updateUser/:id", verifyToken, verifyRole("user"), updateUser);
router.delete("/deleteUser/:id", verifyToken, verifyRole("user"), deleteUser);

module.exports = router;
