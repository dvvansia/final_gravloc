const supplierWaitlistService = require("./supplier-waitlist.service");

const addToWaitlist = async (req, res) => {
  try {
    const result = await supplierWaitlistService.addToWaitlist(req.body);

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
