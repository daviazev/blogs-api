const { categoryService } = require('../service');

const controllerCreateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const categoryCreated = await categoryService.createCategory({ name });
    return res.status(201).json({ id: categoryCreated.null, name });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const controllerGetAllCategories = async (_req, res) => {
  try {
    const result = await categoryService.getAllCategories();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = { 
  controllerCreateCategory,
  controllerGetAllCategories,
};
