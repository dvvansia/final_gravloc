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

  // Email failures should never break the signup itself.
  try {
    const info = await sendUserWaitlistEmail(email);
    console.log("Waitlist confirmation email sent:", info.messageId);
  } catch (err) {
    console.error("Failed to send waitlist confirmation email:", err.message);
  }

  return user;
};

const getWaitlist = async () => {
  const users = await Waitlist.findAll({
    order: [["createdAt", "DESC"]],
  });

  return users;
};

module.exports = {
  addToWaitlist,
  getWaitlist,
};
