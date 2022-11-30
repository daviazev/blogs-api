const { validateLoginField } = require('./validations/validations.values');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  const validation = validateLoginField(email, password);

  if (validation.type) {
    return res.status(400).json({ type: validation.message, message: validation.message });
  }

  return next();
};

module.exports = {
  loginValidation,
};
