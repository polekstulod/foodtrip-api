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
		length: 10,
		search: {
			value: '',
			regex: false,
		},
	};

	try {
		let data = await dataTable(db.Dish, req.body, {
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
		length: 10,
		search: {
			value: '',
			regex: false,
		},
	};

	try {
		let data = await dataTable(db.DishCategory, req.body, {
			include: ['dishes'],
		});
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
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
