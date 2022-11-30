const { loginFieldsValidation } = require('./schema');

const validateLoginField = (email, password) => {
  const { error } = loginFieldsValidation.validate({ email, password });

  if (error) return { type: error.message, message: 'Some required fields are missing' };

  return { type: null, messsage: '' };
};

module.exports = {
  validateLoginField,
};
