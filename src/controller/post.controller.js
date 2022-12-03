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

const getPostInfosById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await postService.getPostInfosById(id);

    if (result === null) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const controllerUpdatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { dataValues } = req.user;

    const result = await postService.updatePostById(id, title, content, dataValues.id);

    if (result === null) return res.status(404).json({ message: 'post not found' });

    if (result === 'Unauthorized user') {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(200).json({ message: 'Erro interno', erro: error.message });
  }
};

module.exports = { controllerPost, controllerGetAllPosts, getPostInfosById, controllerUpdatePost };
