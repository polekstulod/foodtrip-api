const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

// * Create Dish
exports.createDish = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	req.body.dish_img = req.file != undefined ? req.file.filename : '';
	req.body.created_by = req.user.user_id;
	req.body.dish_no = Math.floor(Math.random() * (99999999999 - 1 + 1) + 1);

	db.Dish.create(req.body)
		.then((data) => {
			db.Dish.findByPk(data.dish_id, { include: ['created'] }).then((result) => {
				dataResponse(res, data, 'Dish has been created successfully', 'Dish was not created');
			});
		})
		.catch((err) => {
			errResponse(res, err);
		});
};

// * Find all Dish of Restaurant
exports.getAllDishes = (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const restoId = req.params.restoID;

	db.Dish.findAll({
		where: { resto_id: restoId },
		include: ['dish_category', 'restaurant'],
	})
		.then((data) => {
			dataResponse(
				res,
				data,
				'All Dish of this Restaurant has been retrieved',
				'No Dish of this Restaurant has been retrieved'
			);
		})
		.catch((err) => {
			errResponse(res, err);
		});
};

// * Find single Dish Category of Restaurant
exports.getDishCat = (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const restoId = req.params.restoId;
	const catId = req.params.catId;

	db.Dish.findAll({
		where: { resto_id: restoId, dishcatg_id: catId },
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
			console.log(err);
			res.status(500).send({
				error: true,
				data: [],
				message: err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
			});
		});
};

// * Find single Dish of Restaurant
exports.getDish = (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.dishID;

	db.Dish.findByPk(id, {
		include: ['dish_category', 'restaurant'],
	})
		.then((data) => {
			dataResponse(
				res,
				data,
				'Dish of this Restaurant has been retrieved',
				'No Dish of this Restaurant has been retrieved'
			);
		})
		.catch((err) => {
			errResponse(res, err);
		});
};

// * Update Dish
exports.updateDish = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.dishID;
	await db.Dish.findByPk(id, { attributes: ['dish_img'] }).then(
		(data) => (req.body.dish_img = data.dish_img.slice(-26))
	);
	req.body.updated_by = req.user.user_id;
	if (req.file !== undefined) req.body.dish_img = req.file.filename;
	console.log(req.body.dish_img);

	db.Dish.update(req.body, {
		where: { dish_id: id },
	})
		.then((result) => {
			if (result) {
				db.Dish.findByPk(id, { include: ['updated'] }).then((data) => {
					dataResponse(res, data, 'Dish has been updated successfully', 'Dish was not updated');
				});
			} else {
				errResponse(res, err);
			}
		})
		.catch((err) => {
			errResponse(res, err);
		});
};

// * Delete Dish
exports.deleteDish = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.dishID;
	req.body.deleted_by = req.user.user_id;

	db.Dish.destroy({
		where: {
			dish_id: id,
		},
	}).catch((err) => {
		errResponse(res, err);
	});

	db.Dish.update(req.body, {
		where: { dish_id: id },
		paranoid: false,
	}).then((result) => {
		if (result) {
			db.Dish.findByPk(id, {
				paranoid: false,
				include: ['deleted'],
			}).then((data) => {
				dataResponse(res, data, 'Dish has been deleted successfully');
			});
		} else {
			errResponse(res, err);
		}
	});
};
