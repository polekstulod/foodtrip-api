var router = require('express').Router();

const userController = require('../controllers/login.controller');

router.post('/', userController.login);

module.exports = router;
