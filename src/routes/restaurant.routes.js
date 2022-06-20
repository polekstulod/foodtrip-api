var router = require('express').Router();

const restoController = require('../controllers/restaurant.controller');

const multer = require('multer');
const path = require('path');
const helpers = require('../helpers/imageHelper');

// * Restaurant Category Controller Routes
router.post('/category', restoController.createRestoCat);
router.put('/category/:id', restoController.updateRestoCat);
router.get('/category', restoController.findAllRestoCat);
router.get('/category/:id', restoController.findOneRestoCat);
router.delete('/category/:id', restoController.deleteRestoCat);

// * Dish Category Controller Routes
router.post('/dish/category', restoController.createDishCat);
router.put('/dish/category/:id', restoController.updateDishCat);
router.get('/dish/category', restoController.findAllDishCat);
router.get('/dish/category/:id', restoController.findOneDishCat);
router.delete('/dish/category/:id', restoController.deleteDishCat);

module.exports = router;
