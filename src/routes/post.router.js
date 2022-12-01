const express = require('express');

// const { validateJWT } = require('../middlewares/validateJWT');

const router = express.Router();

router.use(express.json());

module.exports = router;
