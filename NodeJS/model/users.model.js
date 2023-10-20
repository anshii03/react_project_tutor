const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    required: true,
  },
});

const usersModel = mongoose.model("users", userSchema);

module.exports = usersModel;
