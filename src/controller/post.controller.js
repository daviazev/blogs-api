const { postService } = require('../service');

const controllerPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { dataValues: { id } } = req.user;
    
    const result = await postService.insertPost(title, content, id, categoryIds);
    
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
};

const controllerGetAllPosts = async (_req, res) => {
  try {
    const result = await postService.getAllPosts();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = { controllerPost, controllerGetAllPosts };
