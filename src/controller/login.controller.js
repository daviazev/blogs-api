require('dotenv/config');
const jwt = require('jsonwebtoken');
const { loginService } = require('../service');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginService.getUserByEmail(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = {
  login,
};
