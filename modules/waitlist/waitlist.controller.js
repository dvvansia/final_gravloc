const waitlistService = require("./waitlist.service");

const addToWaitlist = async (req, res) => {
  try {
    const result = await waitlistService.addToWaitlist(req.body);

    return res.status(201).json({
      success: true,
      message: "Successfully joined waitlist.",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToWaitlist,
};

// Add this function
exports.getWaitlist = async (req, res) => {
  try {
    const { Waitlist } = require("./waitlist.model");
    const entries = await Waitlist.findAll({
      order: [["created_at", "DESC"]],
    });
    res.json({
      total: entries.length,
      entries: entries,
    });
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    res.status(500).json({ error: "Failed to fetch waitlist" });
  }
};
