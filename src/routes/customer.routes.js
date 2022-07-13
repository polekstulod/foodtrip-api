var router = require('express').Router();

var restaurantCtl = require('../controllers/customer/restaurants.controller');
router.get('/restaurants', restaurantCtl.getAllRestaurants);
router.get('/restaurant/:restoID', restaurantCtl.getRestaurant);

var dishCtl = require('../controllers/customer/dishes.controller');
router.get('/dishes', dishCtl.getAllDishes);
router.get('/dish-cat', dishCtl.getAllDishCat);
router.get('/dish/:dishID', dishCtl.getDish);
router.get('/dish-cat/:dishCatID', dishCtl.getDishCat);

var addressCtl = require('../controllers/customer/addresses.controller');
router.post('/address', addressCtl.createAddress);
router.get('/address', addressCtl.getAllAddress);
router.get('/address/:addressID', addressCtl.getAddress);
router.put('/address/:addressID', addressCtl.updateAddress);
router.delete('/address/:addressID', addressCtl.deleteAddress);

module.exports = router;
