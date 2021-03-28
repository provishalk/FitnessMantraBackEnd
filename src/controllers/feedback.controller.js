const Feedback = require("../models/feedback.model");

module.exports.addFeedback = async (req, res) => {
  const data = new Feedback({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  await data.save();
  return res.status(200).send({
    error: false,
    message: "Message saved successfully",
  });
};

module.exports.getAllFeedbacks = async (req, res) => {
  const data = await Feedback.find({}).sort("-createdAt");
  return res.status(200).send({
    error: false,
    data,
  });
};
