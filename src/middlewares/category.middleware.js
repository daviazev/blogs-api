const { validateCreateCategory } = require('./validations/validations.values');

const nameFieldValidation = (req, res, next) => {
  const { name } = req.body;

 const validation = validateCreateCategory(name);

 if (validation.type) {
    return res.status(400).json({ type: validation.message, message: validation.message });
 }
  
 return next();
}; 

module.exports = {
  nameFieldValidation,
};
