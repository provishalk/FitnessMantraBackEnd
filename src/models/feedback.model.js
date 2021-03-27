const mongoose = require("mongoose");

const FeedbackModel = mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("feedback", FeedbackModel);
