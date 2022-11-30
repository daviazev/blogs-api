const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const result = await User.create({ displayName, email, password, image });

  return result;
};

const getUserById = async (id) => {
  const result = await User.findByPk(id, {
    attributes: { exclude: 'password' },
  });

  return result;
};

const getAllUsers = async () => {
  const result = await User.findAll({
    attributes: { exclude: 'password' },
  });

  return result;
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
};
