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

const getWaitlist = async (req, res) => {
  try {
    const result = await waitlistService.getWaitlist();

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToWaitlist,
  getWaitlist,
};
