const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);

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

module.exports = { insertPost };