const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback.controller");

router.post("/addFeedback", feedbackController.addFeedback);

router.get("/allFeedback", feedbackController.getAllFeedbacks);

module.exports = router;
