const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Routes
const userRoute = require("./src/routes/user.router");
const feedbackRoute = require("./src/routes/feedback.router");

// Database connection
mongoose.connect(
  "mongodb+srv://vishal:12345@cluster0.nqdbc.mongodb.net/FitnessMantra?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Enable CORS
app.use(cors());

// Register Router
app.use("/api/user", userRoute);
app.use("/api/feedback", feedbackRoute);

// Start Server
app.listen(port);
