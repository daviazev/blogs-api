const express = require('express');

const { loginValidation } = require('../middlewares/login.middleware');

const loginController = require('../controller/login.controller');

const router = express.Router();

router.use(express.json());

router.post('/', loginValidation, loginController.login);

module.exports = router;
