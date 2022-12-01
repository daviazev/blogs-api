const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const result = await Category.create({ name });
  
  return result;
};

const getAllCategories = async () => {
  const result = await Category.findAll();

  return result;
};

const doesCategoryExists = async (arrayOfIds) => {
  const result = await Promise.all(arrayOfIds.map(async (category) => {
    const xablau = await Category.findByPk(category);

    return xablau;
  }));

  return result;
};

module.exports = {
  createCategory,
  getAllCategories,
  doesCategoryExists,
};