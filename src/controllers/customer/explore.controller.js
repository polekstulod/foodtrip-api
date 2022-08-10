const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');
const { Op } = require('sequelize');

// * Retrieve some Restaurant Category
exports.getSomeRestoCat = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	try {
		const data = await db.RestoCategory.findAll({
			include: 'restaurants',
			where: { restocatg_name: { [Op.ne]: 'Fast Food' } },
			limit: 4,
		});
		dataResponse(res, data, 'Some Restaurant Category has been retrieved', 'No Restaurant Category has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve all Popular Dish
exports.getPopularDishes = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	try {
		const data = await db.Dish.findAll({
			include: ['dish_category', { model: db.Restaurant, as: 'restaurant', include: ['restaurant_category'] }],
			limit: 10,
		});
		dataResponse(res, data, 'All Dishes has been retrieved', 'No Dishes has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve all Popular Restaurant
exports.getPopularRestaurants = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	try {
		const data = await db.Restaurant.findAll({
			include: ['restaurant_category'],
			limit: 5,
		});
		dataResponse(res, data, 'Popular Restaurants has been retrieved', 'No Restaurants has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
