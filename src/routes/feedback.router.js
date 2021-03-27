const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback.controller");

router.post("/feedback", feedbackController.addFeedback);

module.exports = router;
