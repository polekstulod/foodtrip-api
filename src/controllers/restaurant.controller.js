const db = require('../models');
const RestoCategory = db.RestoCategory;
const DishCategory = db.DishCategory;
const Restaurant = db.Restaurant;
const Dish = db.Dish;

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

// * Create Dish Category
exports.createDishCat = async (req, res) => {
	req.body.created_by = req.user.user_id;

	DishCategory.create(req.body)
		.then((data) => {
			DishCategory.findByPk(data.dishcatg_id, { include: ['created'] }).then(
				(result) => {
					res.send({
						error: false,
						data: result,
						message: ['Dish Category is created successfully.'],
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
exports.findAllDishCat = (req, res) => {
	DishCategory.findAll()
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
exports.findOneDishCat = (req, res) => {
	const id = req.params.id;

	DishCategory.findByPk(id)
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
exports.updateDishCat = async (req, res) => {
	const id = req.params.id;
	req.body.updated_by = req.user.user_id;

	DishCategory.update(req.body, {
		where: { dishcatg_id: id },
	})
		.then((result) => {
			if (result) {
				DishCategory.findByPk(id, { include: ['updated'] }).then((data) => {
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
exports.deleteDishCat = async (req, res) => {
	const id = req.params.id;
	req.body.deleted_by = req.user.user_id;

	DishCategory.destroy({
		where: {
			dishcatg_id: id,
		},
	}).catch((err) => {
		res.status(500).send({
			error: true,
			data: [],
			message:
				err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
		});
	});

	DishCategory.update(req.body, {
		where: { dishcatg_id: id },
		paranoid: false,
	}).then((result) => {
		if (result) {
			DishCategory.findByPk(id, {
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

// * Create Restaurant
exports.createResto = async (req, res) => {
	req.body.resto_img = req.file != undefined ? req.file.filename : '';
	req.body.created_by = req.user.user_id;

	Restaurant.create(req.body)
		.then((data) => {
			Restaurant.findByPk(data.resto_id, { include: ['created'] }).then(
				(result) => {
					res.send({
						error: false,
						data: result,
						message: ['Restaurant is created successfully.'],
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

// * Retrieve all Restaurant
exports.findAllResto = (req, res) => {
	Restaurant.findAll()
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

// * Find single Restaurant
exports.findOneResto = (req, res) => {
	const id = req.params.id;

	Restaurant.findByPk(id)
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

// * Update Restaurant
exports.updateResto = async (req, res) => {
	const id = req.params.id;
	req.body.updated_by = req.user.user_id;
	req.body.resto_img = req.file != undefined ? req.file.filename : '';

	Restaurant.update(req.body, {
		where: { resto_id: id },
	})
		.then((result) => {
			if (result) {
				Restaurant.findByPk(id, { include: ['updated'] }).then((data) => {
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
exports.deleteResto = async (req, res) => {
	const id = req.params.id;
	req.body.deleted_by = req.user.user_id;

	Restaurant.destroy({
		where: {
			resto_id: id,
		},
	}).catch((err) => {
		res.status(500).send({
			error: true,
			data: [],
			message:
				err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
		});
	});

	Restaurant.update(req.body, {
		where: { resto_id: id },
		paranoid: false,
	}).then((result) => {
		if (result) {
			Restaurant.findByPk(id, {
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

// * Create Dish
exports.createDish = async (req, res) => {
	req.body.dish_img = req.file != undefined ? req.file.filename : '';
	req.body.created_by = req.user.user_id;

	Dish.create(req.body)
		.then((data) => {
			Dish.findByPk(data.dish_id, { include: ['created'] }).then((result) => {
				res.send({
					error: false,
					data: result,
					message: ['Dish is created successfully.'],
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
