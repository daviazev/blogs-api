const { validateCreateUser } = require('./validations/validations.values');

const { getUserByEmail } = require('../service/login.service');

const doesEmailAlreadyExists = async (req, res, next) => {
  const { email } = req.body;

  const validation = await getUserByEmail(email);

  if (validation) return res.status(409).json({ message: 'User already registered' });

  return next();
};

const createUserValidation = (req, res, next) => {
  const { displayName, email, password } = req.body;

  const validation = validateCreateUser(displayName, email, password);

  if (validation.type) {
    return res.status(400).json({ type: validation.message, message: validation.message });
  }

  return next();
};

module.exports = {
  createUserValidation,
  doesEmailAlreadyExists,
};
