const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse } = require('../../helpers/controller.helper');
const bcrypt = require('bcrypt');

// * Register Customer
exports.customer = async (req, res) => {
	req.body.user_no = `USR-${Math.floor(Date.now() * 1.5)}`;
	req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUND));

	try {
		let data = await db.User.create(req.body);
		dataResponse(res, data, 'Customer has been registered', 'Customer was not registered');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Register Restaurant
exports.restaurant = async (req, res) => {
	req.body.resto_img = req.file != undefined ? req.file.filename : '';
	req.body.resto_no = `RTO-${Date.now() * 2}`;

	try {
		let data = await db.Restaurant.create(req.body);
		dataResponse(res, data, 'Restaurant has been registered', 'Restaurant was not registered');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Register Resto Admin
exports.restoAdmin = async (req, res) => {
	req.body.user_no = `USR-${Math.floor(Date.now() * 1.5)}`;
	req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUND));

	try {
		let data = await db.User.create(req.body);
		dataResponse(res, data, 'Resto Admin has been registered', 'Resto Admin was not registered');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Register Admin
exports.admin = async (req, res) => {
	req.body.user_no = `USR-${Math.floor(Date.now() * 1.5)}`;
	req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUND));

	try {
		let data = await db.User.create(req.body);
		dataResponse(res, data, 'Admin has been registered', 'Admin was not registered');
	} catch (err) {
		errResponse(res, err);
	}
};
