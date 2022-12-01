const { validateCreateCategory, validatePost } = require('./validations/validations.values');

const { categoryService } = require('../service');

const nameFieldValidation = (req, res, next) => {
  const { name } = req.body;

 const validation = validateCreateCategory(name);

 if (validation.type) {
    return res.status(400).json({ type: validation.message, message: validation.message });
 }
  
 return next();
}; 

const allCategoriesExists = async (req, res, next) => {
  const { categoryIds } = req.body;

  const result = await categoryService.doesCategoryExists(categoryIds);

  const message = 'one or more "categoryIds" not found';

  if (result.some((e) => e === null)) return res.status(400).json({ message });

  return next();
};

const verifyPostFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const validation = validatePost(title, content, categoryIds);
  
  if (validation.type) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

module.exports = {
  nameFieldValidation,
  verifyPostFields,
  allCategoriesExists,
};
