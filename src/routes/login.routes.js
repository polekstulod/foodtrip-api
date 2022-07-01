var router = require('express').Router();

const loginController = require('../controllers/home/login.controller');

router.post('/', loginController.login);

module.exports = router;
