const express = require('express');

const { doesEmailAlreadyExists, createUserValidation } = require('../middlewares/user.middleware');

const userController = require('../controller/user.controller');

const router = express.Router();

router.use(express.json());

router.post('/', doesEmailAlreadyExists, createUserValidation, userController.createUser);

module.exports = router;
