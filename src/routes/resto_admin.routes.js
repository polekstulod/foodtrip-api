var router = require('express').Router();
const { updateRestoImage, uploadDishImage, updateDishImage } = require('../middlewares/uploadImage');

var restaurantCtl = require('../controllers/resto_admin/restaurants.controller');
router.post('/restaurant/opening-hour', restaurantCtl.createOpeningHour);
router.get('/restaurant/opening-hour', restaurantCtl.getAllOpeningHours);
router.get('/restaurant/opening-hour/:id', restaurantCtl.getOpeningHour);
router.put('/restaurant/opening-hour/:id', restaurantCtl.updateOpeningHour);
router.delete('/restaurant/opening-hour/:id', restaurantCtl.deleteOpeningHour);
router.get('/restaurant/:restoID', restaurantCtl.getRestaurant);
router.put('/restaurant/:restoID', updateRestoImage, restaurantCtl.updateRestaurant);

var dishCtl = require('../controllers/resto_admin/dishes.controller');
router.post('/dish', uploadDishImage, dishCtl.createDish);
router.get('/dishes/:restoID', dishCtl.getAllDishes);
router.get('/dish/:dishID', dishCtl.getDish);
router.put('/dish/:dishID', updateDishImage, dishCtl.updateDish);
router.delete('/dish/:dishID', dishCtl.deleteDish);

var orderCtl = require('../controllers/resto_admin/orders.controller');
router.get('/orders', orderCtl.getAllOrders);
router.get('/order/:orderID', orderCtl.getOrder);
router.put('/order/in-process/:orderID', orderCtl.inProcess);
router.put('/order/otw/:orderID', orderCtl.otw);
router.put('/order/delivered/:orderID', orderCtl.delivered);
router.put('/order/rejected/:orderID', orderCtl.rejected);

var courierCtl = require('../controllers/resto_admin/couriers.controller');
router.get('/couriers', courierCtl.getAllCouriers);

var acctInfoCtl = require('../controllers/resto_admin/acc_info.controller');
router.get('/account/info', acctInfoCtl.getAccountInfo);
router.put('/account/info', acctInfoCtl.updateAcctInfo);
router.post('/account/verify-password', acctInfoCtl.verifyPassword);
router.put('/account/password', acctInfoCtl.updatePassword);

module.exports = router;
