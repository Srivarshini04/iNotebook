// db.js
const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"; 

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;

