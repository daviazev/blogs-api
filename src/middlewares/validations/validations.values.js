const { loginFieldsValidation, createUserValidation } = require('./schema');

const validateLoginField = (email, password) => {
  const { error } = loginFieldsValidation.validate({ email, password });

  if (error) return { type: error.message, message: 'Some required fields are missing' };

  return { type: null, messsage: '' };
};

const validateCreateUser = (displayName, email, password) => {
  const { error } = createUserValidation.validate({ displayName, email, password });
  console.log(error);
  
  if (error) return { type: error.message, message: error.message };

  return { type: null, messsage: '' };
};

module.exports = {
  validateLoginField,
  validateCreateUser,
};
