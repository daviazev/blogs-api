const Joi = require('joi');

const loginFieldsValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const createUserValidation = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  loginFieldsValidation,
  createUserValidation,
};
