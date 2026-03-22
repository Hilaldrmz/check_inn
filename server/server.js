const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRouters = require("./routers/auth.js");
const hotelRouters = require("./routers/hotel.js");
const roomRouters = require("./routers/room.js");
const userRouters = require("./routers/user.js");

dotenv.config();

const app = express();
app.use(cors());

app.use(cookieParser());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/auth", authRouters);
app.use("/api/hotels", hotelRouters);
app.use("/api/rooms", roomRouters);
app.use("/api/users", userRouters);

const PORT = process.env.PORT || 8000;

db();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
