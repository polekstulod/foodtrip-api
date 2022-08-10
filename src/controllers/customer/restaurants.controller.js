const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

// * Retrieve all Restaurant
exports.getAllRestaurants = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

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
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

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

// * Retrieve all Restaurant Category
exports.getAllRestoCat = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	try {
		const data = await db.RestoCategory.findAll({ include: 'restaurants' });
		dataResponse(res, data, 'All Restaurant Category has been retrieved', 'No Restaurant Category has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve single Restaurant Category
exports.getRestoCat = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.params.restoCatID;

	try {
		const data = await db.RestoCategory.findByPk(id, { include: 'restaurants' });
		dataResponse(res, data, 'Restaurant Category has been retrieved', 'No Restaurant Category has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
