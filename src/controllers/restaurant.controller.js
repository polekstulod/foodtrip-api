const db = require('../models');
const RestoCategory = db.RestoCategory;
const DishCategory = db.DishCategory;
const Restaurant = db.Restaurant;
const Dish = db.Dish;
const OpeningHour = db.OpeningHour;

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
	RestoCategory.findAll({ include: 'restaurant_category' })
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

	RestoCategory.findByPk(id, { include: 'restaurant_category' })
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

// * Retrieve all Dish Category
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

// * Find single Dish Category
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

// * Update Dish Category
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

// * Delete Dish Category
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
	req.body.resto_no = Math.floor(Math.random() * (99999999999 - 1 + 1) + 1);

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
	Restaurant.findAll({ include: 'restaurant_category' })
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

	Restaurant.findByPk(id, { include: 'restaurant_category' })
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
	req.body.dish_no = Math.floor(Math.random() * (99999999999 - 1 + 1) + 1);

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

// * Retrieve all Dish
exports.findAllDish = (req, res) => {
	Dish.findAll({ include: ['dish_category', 'restaurant'] })
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

// * Find single Dish
exports.findOneDish = (req, res) => {
	const id = req.params.id;

	Dish.findByPk(id, { include: ['dish_category', 'restaurant'] })
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

// * Retrieve all Dish of Restaurant
exports.findAllDishOfResto = (req, res) => {
	const restoId = req.params.restoId;

	Dish.findAll({
		where: { resto_id: restoId },
		include: ['dish_category', 'restaurant'],
	})
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

// * Find single Dish of Restaurant
exports.findOneDishOfResto = (req, res) => {
	const id = req.params.id;
	const restoId = req.params.restoId;

	Dish.findByPk(id, {
		where: { resto_id: restoId },
		include: ['dish_category', 'restaurant'],
	})
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

// * Update Dish
exports.updateDish = async (req, res) => {
	const id = req.params.id;
	req.body.updated_by = req.user.user_id;
	req.body.dish_img = req.file != undefined ? req.file.filename : '';

	Dish.update(req.body, {
		where: { dish_id: id },
	})
		.then((result) => {
			if (result) {
				Dish.findByPk(id, { include: ['updated'] }).then((data) => {
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

// * Delete Dish
exports.deleteDish = async (req, res) => {
	const id = req.params.id;
	req.body.deleted_by = req.user.user_id;

	Dish.destroy({
		where: {
			dish_id: id,
		},
	}).catch((err) => {
		res.status(500).send({
			error: true,
			data: [],
			message:
				err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
		});
	});

	Dish.update(req.body, {
		where: { dish_id: id },
		paranoid: false,
	}).then((result) => {
		if (result) {
			Dish.findByPk(id, {
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

// * Create Opening Hour
exports.createOpeningHour = async (req, res) => {
	req.body.created_by = req.user.user_id;
	req.body.resto_id = req.user.resto_id;

	OpeningHour.create(req.body)
		.then((data) => {
			OpeningHour.findByPk(data.openhrs_id, {
				include: ['created', 'restaurant'],
			}).then((result) => {
				res.send({
					error: false,
					data: result,
					message: ['Opening hour is created successfully.'],
				});
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({
				error: true,
				data: [],
				message: err.errors.map((e) => e.message),
			});
		});
};

// * Retrieve all Opening Hours
exports.findAllOpeningHour = (req, res) => {
	OpeningHour.findAll({ include: 'restaurant' })
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

// * Find Restaurant Opening Hours
exports.findRestoOpeningHours = (req, res) => {
	const id = req.params.id;

	OpeningHour.findAll({ where: { resto_id: id } })
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

// * Update Opening Hour
exports.updateOpeningHour = async (req, res) => {
	const id = req.params.id;
	req.body.updated_by = req.user.user_id;

	OpeningHour.update(req.body, {
		where: { openhrs_id: id },
	})
		.then((result) => {
			if (result) {
				OpeningHour.findByPk(id, { include: ['updated', 'restaurant'] }).then(
					(data) => {
						res.send({
							error: false,
							data: data,
							message: [process.env.SUCCESS_UPDATE],
						});
					}
				);
			} else {
				res.status(500).send({
					error: true,
					data: [],
					message: ['Error in updating a record'],
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({
				error: true,
				data: [],
				message:
					err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
			});
		});
};

// * Delete Opening Hour
exports.deleteOpeningHour = async (req, res) => {
	const id = req.params.id;
	req.body.deleted_by = req.user.user_id;

	OpeningHour.destroy({
		where: {
			openhrs_id: id,
		},
	}).catch((err) => {
		res.status(500).send({
			error: true,
			data: [],
			message:
				err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
		});
	});

	OpeningHour.update(req.body, {
		where: { openhrs_id: id },
		paranoid: false,
	}).then((result) => {
		if (result) {
			OpeningHour.findByPk(id, {
				paranoid: false,
				include: ['deleted', 'restaurant'],
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
