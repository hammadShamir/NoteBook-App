const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017";

const connetToMongo = () => {
    mongoose.connect(mongoUri, () => {
        console.log("Successfully Connected to MongoDB");
    })
}

module.exports = connetToMongo;