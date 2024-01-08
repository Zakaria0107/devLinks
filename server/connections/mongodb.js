const mongoose = require("mongoose");

const MONGODB_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, MONGODB_OPTIONS);
    console.log("Connected to database !!!");
  } catch (error) {
    console.error("Database is not connected", error);
  }
};

module.exports = { connectToDatabase };
