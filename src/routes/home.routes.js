var router = require('express').Router();
const multer = require('multer');
const path = require('path');
const helpers = require('../helpers/imageHelper');

const restoStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../../public/uploads/restaurants/'));
	},

	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	},
});

const uploadRestoImage = (req, res, next) => {
	let restoUpload = multer({
		storage: restoStorage,
		fileFilter: helpers.imageFilter,
	}).single('resto_img');

	restoUpload(req, res, function (err) {
		if (req.fileValidationError) {
			return res.status(500).send({
				error: true,
				data: [],
				message: [req.fileValidationError],
			});
		} else if (!req.file) {
			return res.status(500).send({
				error: true,
				data: [],
				message: ['Please select an image to upload'],
			});
		} else if (err instanceof multer.MulterError) {
			return res.status(500).send({
				error: true,
				data: [],
				message: [err],
			});
		} else if (err) {
			return res.status(500).send({
				error: true,
				data: [],
				message: [err],
			});
		}

		next();
	});
};

var loginCtlr = require('../controllers/home/login.controller');
router.post('/login', loginCtlr.login);

var registerCtlr = require('../controllers/home/register.controller');
router.post('/register/customer', registerCtlr.customer);
router.post('/register/resto-admin', registerCtlr.restoAdmin);
router.post('/register/restaurant', uploadRestoImage, registerCtlr.restaurant);
router.post('/register/admin', registerCtlr.admin);

var dishCat = require('../controllers/all/dish_cat.controller');
router.get('/dishes', dishCat.getAllDishes);
router.get('/dish-cat', dishCat.getAllDishCat);
router.get('/dish-cat/:dishCatID', dishCat.getDishCat);

var restaurant = require('../controllers/all/restaurants.controller');
router.get('/restaurants', restaurant.getAllRestaurants);
router.get('/restaurant/:restoID', restaurant.getRestaurant);

var restoCat = require('../controllers/all/resto_cat.controller.js');
/* router.get('/resto-categories', restoCat.getAllRestoCat);
router.get('/resto-category/:restoCatID', restoCat.getRestoCat); */

module.exports = router;
