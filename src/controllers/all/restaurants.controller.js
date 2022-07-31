const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse } = require('../../helpers/controller.helper');

// * Retrieve all Restaurant
exports.getAllRestaurants = async (req, res) => {
	try {
		const data = await db.Restaurant.findAll({
			include: [
				'restaurant_category',
				{
					model: db.Dish,
					as: 'resto_dishes',
				},
			],
		});
		dataResponse(res, data, 'All Restaurants has been retrieved', 'No Restaurants has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve single Restaurant
exports.getRestaurant = async (req, res) => {
	const id = req.params.restoID;

	try {
		const data = await db.Restaurant.findByPk(id, {
			include: [
				'restaurant_category',
				{
					model: db.Dish,
					as: 'resto_dishes',
				},
			],
		});
		dataResponse(res, data, 'Restaurant has been retrieved', 'No Restaurant has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
