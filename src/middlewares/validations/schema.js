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

const createCategoryValidation = Joi.object({
  name: Joi.string().required(),
});

const postValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

module.exports = {
  loginFieldsValidation,
  createUserValidation,
  createCategoryValidation,
  postValidation,
};
