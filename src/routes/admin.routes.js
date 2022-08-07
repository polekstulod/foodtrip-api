var router = require('express').Router();

var restaurantCtl = require('../controllers/admin/restaurants.controller');
router.get('/restaurants', restaurantCtl.getAllRestaurants);
router.get('/restaurant/:restoID', restaurantCtl.getRestaurant);
router.get('/resto-cat', restaurantCtl.getAllRestoCat);
router.get('/resto-cat/:restoCatID', restaurantCtl.getRestoCat);

var dishCtl = require('../controllers/admin/dishes.controller');
router.get('/dishes', dishCtl.getAllDishes);
router.get('/dish-cat', dishCtl.getAllDishCat);
router.get('/dish/:dishID', dishCtl.getDish);
router.get('/dish-cat/:dishCatID', dishCtl.getDishCat);

var addressCtl = require('../controllers/admin/addresses.controller');
router.get('/address', addressCtl.getAllAddress);
router.get('/address/:addressID', addressCtl.getAddress);

var userCtl = require('../controllers/admin/user.controller');
router.get('/user/resto-admin', userCtl.getAllRestoAdmin);
router.get('/user/resto-admin/:restoAdminID', userCtl.getRestoAdmin);
router.get('/user/customer', userCtl.getAllCustomer);
router.get('/user/customer/:customerID', userCtl.getCustomer);
router.get('/user/admin', userCtl.getAllAdmin);
router.get('/user/admin/:adminID', userCtl.getAdmin);

var acctInfoCtl = require('../controllers/admin/acc_info.controller');
router.get('/account/info', acctInfoCtl.getAccountInfo);
router.put('/account/info', acctInfoCtl.updateAcctInfo);
router.post('/account/verify-password', acctInfoCtl.verifyPassword);
router.put('/account/password', acctInfoCtl.updatePassword);

var orderCtl = require('../controllers/admin/orders.controller');
router.get('/orders', orderCtl.getAllOrders);
router.get('/order/:orderID', orderCtl.getOrder);

var courierCtl = require('../controllers/admin/couriers.controller');
router.get('/couriers', courierCtl.getAllCouriers);

module.exports = router;
