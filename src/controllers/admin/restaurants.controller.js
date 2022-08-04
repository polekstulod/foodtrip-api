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
			include: ['restaurant_category'],
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
