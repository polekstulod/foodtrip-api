const db = require('../models');
const RestoCategory = db.RestoCategory;

// * Create Restaurant Category
exports.createRestoCat = async (req, res) => {
	req.body.created_by = req.user.user_id;

	RestoCategory.create(req.body)
		.then((data) => {
			RestoCategory.findByPk(data.restocatg_id, { include: ['created'] }).then(
				(result) => {
					res.send({
						error: false,
						data: result,
						message: ['Restaurant Category is created successfully.'],
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

// * Retrieve all Restaurant Category
exports.findAllRestoCat = (req, res) => {
	RestoCategory.findAll()
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

// * Find single Restaurant Category
exports.findOneRestoCat = (req, res) => {
	const id = req.params.id;

	RestoCategory.findByPk(id)
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

// * Update Restaurant Category
exports.updateRestoCat = async (req, res) => {
	const id = req.params.id;
	req.body.updated_by = req.user.user_id;

	RestoCategory.update(req.body, {
		where: { restocatg_id: id },
	})
		.then((result) => {
			if (result) {
				RestoCategory.findByPk(id, { include: ['updated'] }).then((data) => {
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

// * Delete Restaurant Category
exports.deleteRestoCat = async (req, res) => {
	const id = req.params.id;
	req.body.deleted_by = req.user.user_id;

	RestoCategory.destroy({
		where: {
			restocatg_id: id,
		},
	}).catch((err) => {
		res.status(500).send({
			error: true,
			data: [],
			message:
				err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
		});
	});

	RestoCategory.update(req.body, {
		where: { restocatg_id: id },
		paranoid: false,
	}).then((result) => {
		if (result) {
			RestoCategory.findByPk(id, {
				paranoid: false,
				include: ['deleted'],
			}).then((data) => {
				res.send({
					error: false,
					data: data,
					message: [process.env.SUCCESS_DELETE],
				});
			});
		} else {
			res.status(500).send({
				error: true,
				data: [],
				message: ['Error in deleting a record'],
			});
		}
	});
};
