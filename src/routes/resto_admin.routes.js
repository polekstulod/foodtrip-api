var router = require('express').Router();
const { updateRestoImage, uploadDishImage, updateDishImage } = require('../middlewares/uploadImage');

var restaurantCtl = require('../controllers/resto_admin/restaurants.controller');
router.get('/restaurant/:restoID', restaurantCtl.getRestaurant);
router.put('/restaurant/:restoID', updateRestoImage, restaurantCtl.updateRestaurant);

var dishCtl = require('../controllers/resto_admin/dishes.controller');
router.post('/dish', uploadDishImage, dishCtl.createDish);
router.get('/dishes/:restoID', dishCtl.getAllDishes);
router.get('/dish/:dishID', dishCtl.getDish);
router.put('/dish/:dishID', updateDishImage, dishCtl.updateDish);
router.delete('/dish/:dishID', dishCtl.deleteDish);

var acctInfoCtl = require('../controllers/resto_admin/acc_info.controller');
router.get('/account/info', acctInfoCtl.getAccountInfo);
router.put('/account/info', acctInfoCtl.updateAcctInfo);
router.post('/account/verify-password', acctInfoCtl.verifyPassword);
router.put('/account/password', acctInfoCtl.updatePassword);

module.exports = router;
