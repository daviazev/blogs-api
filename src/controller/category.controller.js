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

module.exports = { 
  controllerCreateCategory,
};
