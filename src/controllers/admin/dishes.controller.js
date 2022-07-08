const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

// * Retrieve all Dish
exports.getAllDishes = (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	db.Dish.findAll({ include: ['dish_category', 'restaurant'] })
		.then((data) => dataResponse(res, data, 'All Dishes has been retrieved', 'No Dishes has been retrieved'))
		.catch((err) => errResponse(res, err));
};

// * Retrieve all Dish Category
exports.getAllDishCat = (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	db.DishCategory.findAll({ include: 'dishes' })
		.then((data) =>
			dataResponse(res, data, 'All Dish Category has been retrieved', 'No Dish Category has been retrieved')
		)
		.catch((err) => errResponse(res, err));
};

// * Retrieve single Dish
exports.getDish = (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.dishID;

	db.Dish.findByPk(id, { include: ['dish_category', 'restaurant'] })
		.then((data) => dataResponse(res, data, 'Dish has been retrieved', 'No Dish has been retrieved'))
		.catch((err) => errResponse(res, err));
};

// * Retrieve single Dish Category
exports.getDishCat = (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.dishCatID;

	db.DishCategory.findByPk(id, { include: 'dishes' })
		.then((data) => dataResponse(res, data, 'Dish Category has been retrieved', 'No Dish Category has been retrieved'))
		.catch((err) => errResponse(res, err));
};
