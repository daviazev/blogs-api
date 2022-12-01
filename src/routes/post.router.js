const express = require('express');

const { validateJWT } = require('../middlewares/validateJWT');

const { allCategoriesExists, verifyPostFields } = require('../middlewares/category.middleware');

const postController = require('../controller/post.controller');

const router = express.Router();

router.use(express.json());

router.post('/', validateJWT, verifyPostFields, allCategoriesExists, postController.controllerPost);

router.get('/', validateJWT, postController.controllerGetAllPosts);

router.get('/:id', validateJWT, postController.getPostInfosById);

module.exports = router;
