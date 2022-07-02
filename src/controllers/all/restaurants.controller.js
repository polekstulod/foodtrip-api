const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse } = require('../../helpers/controller.helper');

// * Retrieve all Restaurant
exports.getAllRestaurants = (req, res) => {
	db.Restaurant.findAll({
		include: [
			'restaurant_category',
			{
				model: db.Dish,
				as: 'resto_dishes',
			},
		],
	})
		.then((data) => dataResponse(res, data, 'All Restaurants has been retrieved', 'No Restaurants has been retrieved'))
		.catch((err) => errResponse(res, err));
};

// * Retrieve single Restaurant
exports.getRestaurant = (req, res) => {
	const id = req.params.restoID;

	db.Restaurant.findByPk(id, {
		include: [
			'restaurant_category',
			{
				model: db.Dish,
				as: 'resto_dishes',
			},
		],
	})
		.then((data) => dataResponse(res, data, 'Restaurant has been retrieved', 'No Restaurant has been retrieved'))
		.catch((err) => errResponse(res, err));
};
