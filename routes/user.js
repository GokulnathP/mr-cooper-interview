const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

router.get('/', userController.getUser);

router.post('/createUser', userController.createUser);

module.exports = router;