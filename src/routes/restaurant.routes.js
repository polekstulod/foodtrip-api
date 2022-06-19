var router = require('express').Router();

const restoController = require('../controllers/restaurant.controller');

// * Restaurant Controller Routes
router.post('/category', restoController.createRestoCat);
router.put('/category/:id', restoController.updateRestoCat);
router.get('/category', restoController.findAllRestoCat);
router.get('/category/:id', restoController.findOneRestoCat);
router.delete('/category/:id', restoController.deleteRestoCat);

module.exports = router;
