const { validateUpdatePost } = require('./validations/validations.values');

const validateUpdate = (req, res, next) => {
  const { title, content } = req.body;

  const validation = validateUpdatePost(title, content);

  if (validation.type) return res.status(400).json({ message: validation.message });

  return next();
};

module.exports = { validateUpdate };
