const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');

// * Create user
exports.create = async (req, res) => {
	req.body.created_by = req.user.user_id;

	req.body.password = await bcrypt.hash(
		req.body.password,
		parseInt(process.env.SALT_ROUND)
	);
	User.create(req.body)
		.then((data) => {
			User.findByPk(data.user_id, { include: ['created'] }).then((result) => {
				res.send({
					error: false,
					data: result,
					message: ['User is created successfully.'],
				});
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
	User.findAll()
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
exports.findOne = (req, res) => {
	const id = req.params.id;

	User.findByPk(id)
		.then((data) => {
			res.send({
				error: false,
				data: data,
				message: [process.env.SUCCESS_RETRIEVED],
			});
		})
		.catch((err) => {
			res.status(500).send({
				error: true,
				data: [],
				message:
					err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
			});
		});
};

// * Update User
exports.update = async (req, res) => {
	const id = req.params.id;
	req.body.updated_by = req.user.user_id;

	if (req.body.password) {
		req.body.password = await bcrypt.hash(
			req.body.password,
			parseInt(process.env.SALT_ROUNDS)
		);
	}

	User.update(req.body, {
		where: { user_id: id },
	})
		.then((result) => {
			if (result) {
				User.findByPk(id, { include: ['updated'] }).then((data) => {
					res.send({
						error: false,
						data: data,
						message: [process.env.SUCCESS_UPDATE],
					});
				});
			} else {
				res.status(500).send({
					error: true,
					data: [],
					message: ['Error in updating a record'],
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				error: true,
				data: [],
				message:
					err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
			});
		});
};

// * Delete User
exports.delete = async (req, res) => {
	const id = req.params.id;
	req.body.deleted_by = req.user.user_id;

	User.destroy({
		where: {
			user_id: id,
		},
	}).catch((err) => {
		res.status(500).send({
			error: true,
			data: [],
			message:
				err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
		});
	});

	User.update(req.body, {
		where: { user_id: id },
		paranoid: false,
	}).then((result) => {
		if (result) {
			User.findByPk(id, { paranoid: false, include: ['deleted'] }).then(
				(data) => {
					res.send({
						error: false,
						data: data,
						message: [process.env.SUCCESS_DELETE],
					});
				}
			);
		} else {
			res.status(500).send({
				error: true,
				data: [],
				message: ['Error in deleting a record'],
			});
		}
	});
};
