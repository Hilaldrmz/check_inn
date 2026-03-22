const { use } = require("express/lib/application");
const mongoose = require("mongoose");

const db = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database connected");
        })
        .catch((err) => {
            console.log("Database connection error", err);
        });
};

module.exports = db;
