const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse } = require('../../helpers/controller.helper');

// * Retrieve all Dish
exports.getAllDishes = async (req, res) => {
	try {
		const data = await db.Dish.findAll({
			include: ['dish_category', 'restaurant'],
			where: {
				dishcatg_id: [
					'b927e32d-30ac-48bf-b272-341f4ed6ff6c',
					'e45c1775-571d-4804-8f59-c2c456d606f2',
					'9e4b13a9-ee87-4ab0-a433-df698dc11cfe',
				],
			},
		});
		dataResponse(res, data, 'All Dishes has been retrieved', 'No Dishes has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve all Dish Category
exports.getAllDishCat = async (req, res) => {
	try {
		const data = await db.DishCategory.findAll({
			include: 'dishes',
			where: { dishcatg_name: ['Pasta', 'Rice Dishes', 'Vegetables'] },
		});
		dataResponse(res, data, 'All Dish Category has been retrieved', 'No Dish Category has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve single Dish Category
exports.getDishCat = async (req, res) => {
	const id = req.params.dishCatID;

	try {
		const data = await db.DishCategory.findByPk(id, { include: 'dishes' });
		dataResponse(res, data, 'Dish Category has been retrieved', 'No Dish Category has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
