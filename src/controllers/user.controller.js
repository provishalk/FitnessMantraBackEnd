const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  // Check user exist or not
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    return res.status(400).send({
      error: true,
      message:
        "User already registered with this email, please try different one",
    });
  }

  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });

  // Save user
  await user.save();
  return res.status(200).send({
    error: false,
    message: "User registered successfully",
  });
};

module.exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = User.findOne(
    { email, password },
    { password: 0 },
    (error, result) => {
      if (error) {
        return res.status(500).send({
          error: true,
          message: "Something went wrong, please try again later",
        });
      }
      if (!result) {
        return res.status(400).send({
          error: true,
          message: "Username or Password is incorrect",
        });
      }

      // Generate Access Token
      var token = jwt.sign(
        { fullName: result.fullName, email: result.email },
        "123456"
      );

      return res.send({
        token,
        email: result.email,
        fullName: result.fullName,
        type: "user",
      });
    }
  );
};

module.exports.getUsers = async (req, res) => {
  const data = await User.find({}, { password: 0 });
  return res.status(200).send({
    error: false,
    data,
  });
};
