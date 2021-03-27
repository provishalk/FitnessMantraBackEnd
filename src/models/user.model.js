const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
  {
    fullName: String,
    email: String,
    mobile: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserModel);
