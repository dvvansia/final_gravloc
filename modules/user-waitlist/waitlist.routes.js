const express = require("express");
const router = express.Router();
const waitlistController = require("./waitlist.controller");

router.post("/", waitlistController.addToWaitlist);
router.get("/", waitlistController.getWaitlist);
router.delete("/:id", waitlistController.deleteWaitlistEntry); // <-- Add this line

module.exports = router;
