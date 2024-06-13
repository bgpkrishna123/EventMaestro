const mongoose = require("mongoose");

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("Connected to DB");
};

module.exports = connectToDB;