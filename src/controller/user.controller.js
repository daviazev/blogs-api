require('dotenv/config');
const jwt = require('jsonwebtoken');
const { userService } = require('../service');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const userCreated = await userService.createUser({ displayName, email, password, image });
    console.log('>>>>>>>>>>>>', userCreated.null);

    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
  
    const token = jwt.sign({ data: { userId: userCreated.null } }, secret, jwtConfig);
    
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'erro', erro: error.message });
  }
};

const controllerGetAllusers = async (_req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: 'erro', erro: error.message });
  }
}; 

module.exports = {
  createUser,
  controllerGetAllusers,
};
