const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: "string",
    unique:true
  },
  lastName: {
    type: "string",
  },
  emailID: {
    type: "string",
    required:true,
    unique:true 
  },
  password: {
    type: "string",
  },
  age: {
    type: Number,
  },
  gender: {
    type: "string",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
