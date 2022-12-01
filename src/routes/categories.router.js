const express = require('express');

const categoryController = require('../controller/category.controller');

const { nameFieldValidation } = require('../middlewares/category.middleware');

const { validateJWT } = require('../middlewares/validateJWT');

const router = express.Router();

router.use(express.json());

router.post('/', validateJWT, nameFieldValidation, categoryController.controllerCreateCategory);

module.exports = router;
