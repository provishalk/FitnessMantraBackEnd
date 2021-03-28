const mongoose = require("mongoose");

const AdminModel = mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("admin", AdminModel);
