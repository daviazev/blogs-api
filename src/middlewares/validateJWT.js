const jwt = require('jsonwebtoken');

const { userService } = require('../service');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const validateJWT = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, secret);

    const user = await userService.getUserById(decoded.data.userId);

    // if (!user) return res.status(401).json({ message: 'Erro ao procurar usuário' });

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJWT,
};
