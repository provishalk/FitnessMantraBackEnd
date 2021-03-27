const Feedback = require("../models/feedback.model");

module.exports.addFeedback = (req, res) => {
  const data = new Feedback({
    name: req.body.userName,
    email: req.body.UserMail,
    message: req.body.UserMessage,
  });
  data.save().then(() => console.log());
  return res.send("data Recived");
};
