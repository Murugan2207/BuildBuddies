const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Murugan2207:Vicky2207@nodejsproject.fx5h5.mongodb.net/buildBuddies"
  );
};

module.exports = connectDB;
  