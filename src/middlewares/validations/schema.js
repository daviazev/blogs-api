const Joi = require('joi');

const loginFieldsValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  loginFieldsValidation,
};
