const { Waitlist } = require("../../models");
const {
  sendUserWaitlistEmail,
} = require("../notification/notification.service");

const addToWaitlist = async ({ email }) => {
  const existing = await Waitlist.findOne({
    where: {
      email,
    },
  });

  if (existing) {
    throw new Error("Email already exists.");
  }

  const user = await Waitlist.create({
    email,
  });

  // Email failures should never break the signup itself — log and move on.
  try {
    const info = await sendUserWaitlistEmail(email);
    console.log("Waitlist confirmation email sent:", info.messageId);
  } catch (err) {
    console.error("Failed to send waitlist confirmation email:", err.message);
  }

  return user;
};

module.exports = {
  addToWaitlist,
};
