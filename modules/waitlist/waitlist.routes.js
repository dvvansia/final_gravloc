const express = require("express");
const router = express.Router();

const waitlistController = require("./waitlist.controller");

router.post("/", waitlistController.addToWaitlist);

module.exports = router;
