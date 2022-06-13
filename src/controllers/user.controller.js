const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');

// * Create user
exports.create = async (req, res) => {
	req.body.password = await bcrypt.hash(
		req.body.password,
		parseInt(process.env.SALT_ROUND)
	);
	User.create(req.body)
		.then((data) => {
			res.send({
				error: false,
				data: data,
				message: ['User is created successfully.'],
			});
		})
		.catch((err) => {
			res.status(500).send({
				error: true,
				data: [],
				message: err.errors.map((e) => e.message),
			});
		});
};

// * Retrieve all User
exports.findAll = (req, res) => {
	User.findAll({ where: { status: 'Active' } })
		.then((data) => {
			res.send({
				error: false,
				data: data,
				message: ['Retrieved successfully.'],
			});
		})
		.catch((err) => {
			res.status(500).send({
				error: true,
				data: [],
				message: err.errors.map((e) => e.message),
			});
		});
};

// * Find single User
exports.findOne = (req, res) => {};

// * Update User
exports.update = async (req, res) => {};

// * Delete User
exports.delete = (req, res) => {};
