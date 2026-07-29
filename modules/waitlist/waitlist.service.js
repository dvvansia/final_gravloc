const { Waitlist } = require("../../models");

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

  return user;
};

module.exports = {
  addToWaitlist,
};
