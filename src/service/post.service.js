const Sequelize = require('sequelize');
const { BlogPost, User, PostCategory, Category } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const { Op } = Sequelize;

const getPostById = async (id) => {
  const createdPost = await BlogPost.findOne({ where: { id } });  

  return createdPost;
};

const insertPost = async (title, content, userId, categoryIds) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({ title, content, userId }, { transaction: t });

      categoryIds.map(async (categoryId) => {
        const postsCategories = await PostCategory.bulkCreate(
          [{ postId: post.null, categoryId }],
       );
  
        return postsCategories;
      });

      return post.null;
    });

    return await getPostById(result);
  } catch (error) {
    console.log('erro::::::', error.message);
  }
};

const getAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return result;
};

const getPostInfosById = async (id) => {
  const result = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (result === null) return null;

  return result;
};

const updatePostById = async (id, title, content, userId) => {
  const doesPostExist = await getPostById(id);

  if (doesPostExist === null) return null;

  if (userId !== doesPostExist.userId) return 'Unauthorized user';

  await BlogPost.update({ title, content }, { where: { id } });

  const postUpdated = await getPostInfosById(id);

  return postUpdated;
};

const deletePostById = async (id, userId) => {
  const doesPostExist = await getPostById(id);

  if (doesPostExist === null) return null;

  if (userId !== doesPostExist.userId) return 'Unauthorized user';

  await BlogPost.destroy({ where: { id } });

  return '';
};

// https://stackoverflow.com/questions/20695062/sequelize-or-condition-object
// https://stackoverflow.com/questions/53971268/node-sequelize-find-where-like-wildcard
const getPostByQuery = async (query) => {
  const queries = await BlogPost.findAll({
    where: {
      [Op.or]: [{ title: { [Op.like]: `%${query}%` } }, { content: { [Op.like]: `%${query}%` } }],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return queries;
};

module.exports = { 
  insertPost,
  getAllPosts,
  getPostInfosById,
  updatePostById,
  deletePostById,
  getPostByQuery,
 };