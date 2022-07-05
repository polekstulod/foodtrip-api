var router = require('express').Router();
const { updateRestoImage, uploadDishImage, updateDishImage } = require('../middlewares/uploadImage');

var restaurantCtl = require('../controllers/resto_admin/restaurants.controller');
/* router.get('/restaurants', restaurantCtl.getRestaurant);
router.put('/restaurant/:restoID', restaurantCtl.updateRestaurant); */

var dishCtl = require('../controllers/resto_admin/dishes.controller');
router.post('/dish', uploadDishImage, dishCtl.createDish);
router.get('/dishes/:restoID', dishCtl.getAllDishes);
router.get('/dish/:dishID', dishCtl.getDish);
router.put('/dish/:dishID', updateDishImage, dishCtl.updateDish);
router.delete('/dish/:dishID', dishCtl.deleteDish);

module.exports = router;
