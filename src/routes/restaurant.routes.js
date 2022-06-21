var router = require('express').Router();

const restoController = require('../controllers/restaurant.controller');

const multer = require('multer');
const path = require('path');
const helpers = require('../helpers/imageHelper');

const restoStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../../public/uploads/restaurants/'));
	},

	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname)
		);
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

const dishStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../../public/uploads/dishes/'));
	},

	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname)
		);
	},
});

const uploadDishImage = (req, res, next) => {
	let restoUpload = multer({
		storage: dishStorage,
		fileFilter: helpers.imageFilter,
	}).single('dish_img');

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

// * Restaurant Controller Routes
router.post('/', uploadRestoImage, restoController.createResto);

// * Dish Controller Routes
router.post('/dish', uploadDishImage, restoController.createDish);

module.exports = router;
