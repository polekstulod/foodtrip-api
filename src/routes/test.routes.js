var router = require('express').Router();

var testCtlr = require('../controllers/test.controller');
router.get('/', testCtlr.testing);

module.exports = router;
