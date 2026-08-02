const { SupplierWaitlist } = require("../../models");
const {
  sendSupplierWaitlistEmail,
} = require("../notification/notification.service");

const addToWaitlist = async ({ email }) => {
  const existing = await SupplierWaitlist.findOne({
    where: {
      email,
    },
  });

  if (existing) {
    throw new Error("Email already exists.");
  }

  const supplier = await SupplierWaitlist.create({
    email,
  });

  // Email failures should never break the signup itself — log and move on.
  try {
    const info = await sendSupplierWaitlistEmail(email);
    console.log("Supplier waitlist confirmation email sent:", info.messageId);
  } catch (err) {
    console.error(
      "Failed to send supplier waitlist confirmation email:",
      err.message,
    );
  }

  return supplier;
};

module.exports = {
  addToWaitlist,
};
