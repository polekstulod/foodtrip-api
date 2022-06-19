const db = require('../models');
const Address = db.Address;

// * Add address
exports.create = async (req, res) => {
	req.body.created_by = req.user.user_id;

	Address.create(req.body, { include: ['created'] })
		.then((data) => {
			Address.findByPk(data.address_id, { include: ['created'] }).then(
				(result) => {
					res.send({
						error: false,
						data: result,
						message: ['Address is created successfully.'],
					});
				}
			);
		})
		.catch((err) => {
			res.status(500).send({
				error: true,
				data: [],
				message: err.errors.map((e) => e.message),
			});
		});
};

// * Retrieve all Address
exports.findAll = (req, res) => {
	Address.findAll()
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

// * Find single Address
exports.findOne = (req, res) => {
	const id = req.params.id;

	Address.findByPk(id)
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

// * Update Address
exports.update = async (req, res) => {
	const id = req.params.id;
	req.body.updated_by = req.user.user_id;

	Address.update(req.body, {
		where: { address_id: id },
	})
		.then((result) => {
			if (result) {
				Address.findByPk(id, { include: ['updated'] }).then((data) => {
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

// * Delete Address
exports.delete = async (req, res) => {
	const id = req.params.id;
	req.body.deleted_by = req.user.user_id;

	Address.destroy({
		where: {
			address_id: id,
		},
	}).catch((err) => {
		res.status(500).send({
			error: true,
			data: [],
			message:
				err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
		});
	});

	Address.update(req.body, {
		where: { address_id: id },
		paranoid: false,
	}).then((result) => {
		if (result) {
			Address.findByPk(id, { paranoid: false, include: ['deleted'] }).then(
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
