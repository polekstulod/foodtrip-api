const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');
const dataTable = require('sequelize-datatables');

// * Retrieve all Dish
exports.getAllDishes = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	req.body = {
		draw: 1,
		columns: [
			{
				data: 'dish_id',
				name: '',
				searchable: true,
				orderable: true,
				search: {
					value: '',
					regex: false,
				},
			},
		],
		order: [
			{
				column: 0,
				dir: 'asc',
			},
		],
		start: 0,
		length: 100,
		search: {
			value: '',
			regex: false,
		},
	};

	try {
		const data = await dataTable(db.Dish, req.body, {
			include: ['dish_category', 'restaurant'],
		});
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve all Dish Category
exports.getAllDishCat = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	req.body = {
		draw: 1,
		columns: [
			{
				data: 'dishcatg_id',
				name: '',
				searchable: true,
				orderable: true,
				search: {
					value: '',
					regex: false,
				},
			},
		],
		order: [
			{
				column: 0,
				dir: 'asc',
			},
		],
		start: 0,
		length: 100,
		search: {
			value: '',
			regex: false,
		},
	};

	try {
		const data = await dataTable(db.DishCategory, req.body, {
			include: ['dishes'],
		});
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve single Dish
exports.getDish = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.dishID;

	try {
		const data = await db.Dish.findByPk(id, { include: ['dish_category', 'restaurant'] });
		dataResponse(res, data, 'Dish has been retrieved', 'No Dish has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve single Dish Category
exports.getDishCat = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.dishCatID;

	try {
		const data = await db.DishCategory.findByPk(id, { include: ['dishes'] });
		dataResponse(res, data, 'Dish Category has been retrieved', 'No Dish Category has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
