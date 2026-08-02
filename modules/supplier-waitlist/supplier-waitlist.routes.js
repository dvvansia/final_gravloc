const express = require("express");
const router = express.Router();

const supplierWaitlistController = require("./supplier-waitlist.controller");

router.post("/", supplierWaitlistController.addToWaitlist);

module.exports = router;
