const Joi = require("joi");

const createSupplierWaitlistSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  createSupplierWaitlistSchema,
};
