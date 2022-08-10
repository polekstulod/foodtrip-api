const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');
const dataTable = require('sequelize-datatables');

// * Retrieve all Restaurant
exports.getAllRestaurants = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}
	req.body = {
		draw: 1,
		columns: [
			{
				data: 'resto_id',
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
		const data = await dataTable(db.Restaurant, req.body, {
			include: ['restaurant_category', 'restoadmin'],
		});
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve single Restaurant
exports.getRestaurant = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.restoID;

	try {
		const data = await db.Restaurant.findByPk(id, {
			include: [
				'restaurant_category',
				'restoadmin',
				'resto_address',
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
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}
	req.body = {
		draw: 1,
		columns: [
			{
				data: 'restocatg_id',
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
		const data = await dataTable(db.RestoCategory, req.body, {
			include: ['restaurants', 'created'],
		});
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve single Restaurant Category
exports.getRestoCat = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.restoCatID;

	try {
		const data = await db.RestoCategory.findByPk(id, { include: ['restaurants'] });
		dataResponse(res, data, 'Restaurant Category has been retrieved', 'No  Restaurant Category has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
