const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

// * Create Dish
exports.createDish = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	req.body.dish_img = req.file != undefined ? req.file.filename : '';
	req.body.created_by = req.user.user_id;
	req.body.dish_no = `DSH-${Math.floor(Date.now() * 2.5)}`;

	try {
		let data = await db.Dish.create(req.body);
		let result = await db.Dish.findByPk(data.dish_id, { include: ['created'] });
		dataResponse(res, result, 'Dish has been created successfully', 'Dish was not created');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Find all Dish of Restaurant
exports.getAllDishes = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const restoId = req.params.restoID;

	try {
		let data = await db.Dish.findAll({
			where: { resto_id: restoId },
			include: ['dish_category', 'restaurant'],
		});
		dataResponse(
			res,
			data,
			'All Dish of this Restaurant has been retrieved',
			'No Dish of this Restaurant has been retrieved'
		);
	} catch (err) {
		errResponse(res, err);
	}
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
exports.getDish = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.dishID;

	try {
		let data = await db.Dish.findByPk(id, {
			include: ['dish_category', 'restaurant'],
		});
		dataResponse(
			res,
			data,
			'Dish of this Restaurant has been retrieved',
			'No Dish of this Restaurant has been retrieved'
		);
	} catch (err) {
		errResponse(res, err);
	}
};

// * Update Dish
exports.updateDish = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.dishID;
	try {
		let dishImg = await db.Dish.findByPk(id, { attributes: ['dish_img'] });
		req.body.dish_img = dishImg.dish_img.slice(-26);
		req.body.updated_by = req.user.user_id;
		if (req.file !== undefined) req.body.dish_img = req.file.filename;

		let result = await db.Dish.update(req.body, {
			where: { dish_id: id },
		});
		if (result) {
			let data = await db.Dish.findByPk(id, { include: ['updated'] });
			dataResponse(res, data, 'Dish has been updated successfully', 'Dish was not updated');
		} else {
			errResponse(res, 'Error in updating Dish');
		}
	} catch (err) {
		errResponse(res, err);
	}
};

// * Delete Dish
exports.deleteDish = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.dishID;
	req.body.deleted_by = req.user.user_id;

	try {
		let del = await db.Dish.destroy({
			where: {
				dish_id: id,
			},
		});

		if (del) {
			await db.Dish.update(req.body, {
				where: { dish_id: id },
				paranoid: false,
			});

			let data = await db.Dish.findByPk(id, {
				paranoid: false,
				include: ['deleted'],
			});
			dataResponse(res, data, 'Dish has been deleted successfully');
		} else {
			errResponse(res, 'Error in deleting Dish');
		}
	} catch (err) {
		errResponse(res, err);
	}
};
