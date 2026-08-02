const express = require("express");
const router = express.Router();
const waitlistController = require("./waitlist.controller");

// POST - Add email to waitlist
router.post("/", waitlistController.addToWaitlist);

// GET - View all waitlist entries
router.get("/", waitlistController.getWaitlist);

module.exports = router;
