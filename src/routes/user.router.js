const express = require('express');

const { doesEmailAlreadyExists, createUserValidation } = require('../middlewares/user.middleware');

const { validateJWT } = require('../middlewares/validateJWT');

const userController = require('../controller/user.controller');

const router = express.Router();

router.use(express.json());

router.post('/', doesEmailAlreadyExists, createUserValidation, userController.createUser);

router.get('/', validateJWT, userController.controllerGetAllusers);

router.get('/:id', validateJWT, userController.controllerGetUserById);

router.delete('/me', validateJWT, userController.controllerDeleteUserById);

module.exports = router;
