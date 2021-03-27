const express = require('express')
const app = express()
const port = 5050
const cors = require('cors');
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vishal:12345@cluster0.nqdbc.mongodb.net/FitnessMantra?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


app.use(bodyParser.json())
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

const Feedback = mongoose.model('Feedback', { 
  userName : String,
  userEmail : String,
  UserMessage : String
});
const User = mongoose.model('user',{
  FullName : String,
  UserEmail : String,
  MobileNo : String,
  UserName :String,
  UserPassword : String
})

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password  = req.body.password;

  const user = User.findOne({UserEmail: email, UserPassword: password}, (error, result) => {
    if (error) {
      return res.status(500).send({
        error: true,
        message: "Something went wrong, please try again later"
      })
    }
    if (!result) {
      return res.status(400).send({
        error: true,
        message: "Username or Password is incorrect"
      })
    }
    return res.send(result)
  })

})

app.post("/formpost", (req, res) => {
      const data =new Feedback({
        userName: req.body.userName,
        userEmail: req.body.UserMail,
        UserMessage: req.body.UserMessage
    });
    data.save().then(() => console.log());
  return res.send("data Recived");
})

app.post("/userRegistration", (req, res) => {
      const user =new User({
        FullName: req.body.FullName,
        UserEmail: req.body.UserEmail,
        MobileNo: req.body.MobileNo,
        UserName: req.body.UserName,
        UserPassword: req.body.UserPassword
    });
    user.save().then(() => console.log());
  return res.send("data Recived");
})


app.post("/adminLogin", (req, res) => {
  console.log(req.body.uName);
  console.log(req.body.upassword);
  return res.send("data Recived");
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})