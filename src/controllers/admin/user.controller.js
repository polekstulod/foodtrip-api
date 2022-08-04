const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');
const dataTable = require('sequelize-datatables');

// * Find All Restaurant Admin
exports.getAllRestoAdmin = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	req.body = {
		draw: 1,
		columns: [
			{
				data: 'user_id',
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
		const data = await dataTable(db.User, req.body, {
			where: { user_type: 'Resto_Admin' },
			include: ['restaurant'],
		});
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
};

// * Find Restaurant Admin
exports.getRestoAdmin = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.restoAdminID;

	try {
		const data = await db.User.findOne({ include: ['restaurant'], where: { user_type: 'Resto_Admin', user_id: id } });
		dataResponse(res, data, 'Resto Admin has been retrieved', 'No Resto Admin has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Find All Customer
exports.getAllCustomer = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	req.body = {
		draw: 1,
		columns: [
			{
				data: 'user_id',
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
		const data = await dataTable(db.User, req.body, {
			where: { user_type: 'Customer' },
		});
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
};

// * Find Customer
exports.getCustomer = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.customerID;

	try {
		const data = await db.User.findOne({ where: { user_type: 'Customer', user_id: id } });
		dataResponse(res, data, 'Customer has been retrieved', 'No Customer has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Find All Admin
exports.getAllAdmin = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	req.body = {
		draw: 1,
		columns: [
			{
				data: 'user_id',
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
		const data = await dataTable(db.User, req.body, {
			where: { user_type: 'Admin' },
			include: ['created'],
		});
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
};

// * Find Admin
exports.getAdmin = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.adminID;

	try {
		const data = await db.User.findOne({ where: { user_type: 'Admin', user_id: id } });
		dataResponse(res, data, 'Admin has been retrieved', 'No Admin has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
