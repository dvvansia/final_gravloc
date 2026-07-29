const Joi = require("joi");

const createWaitlistSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  createWaitlistSchema,
};
