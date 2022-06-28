var router = require('express').Router();

const loginController = require('../controllers/login.controller');

router.post('/', loginController.login);

module.exports = router;
