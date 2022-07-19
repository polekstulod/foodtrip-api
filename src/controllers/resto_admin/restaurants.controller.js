const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

// * Retrieve single Restaurant
exports.getRestaurant = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.restoID;

	try {
		let data = await db.Restaurant.findByPk(id, {
			include: [
				'restaurant_category',
				{
					model: db.Dish,
					as: 'resto_dishes',
				},
			],
		});
		dataResponse(res, data, 'Restaurant has been retrieved', 'No Restaurant has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Update Restaurant
exports.updateRestaurant = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.restoID;

	try {
		let restoImg = await db.Restaurant.findByPk(id, { attributes: ['resto_img'] });
		req.body.resto_img = restoImg.resto_img.slice(-27);
		req.body.updated_by = req.user.user_id;
		if (req.file !== undefined) req.body.resto_img = req.file.filename;

		let result = await db.Restaurant.update(req.body, {
			where: { resto_id: id },
		});

		if (result == 1) {
			let data = await db.Restaurant.findByPk(id, { include: ['updated'] });
			dataResponse(res, data, 'Restaurant has been updated successfully', 'Restaurant was not updated');
		} else {
			errResponse(res, 'Error in updating Dish');
		}
	} catch (err) {
		errResponse(res, err);
	}
};

// * Create Opening Hour
exports.createOpeningHour = async (req, res) => {
	req.body.forEach((element) => {
		element.resto_id = req.user.resto_id;
		element.created_by = req.user.user_id;
	});

	try {
		let data = await db.OpeningHour.bulkCreate(req.body, { validate: true });
		dataResponse(
			res,
			data,
			'Opening Hours has been created successfully',
			'No Opening Hours has been created successfully'
		);
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve all Opening Hours
exports.getAllOpeningHours = async (req, res) => {
	const id = req.user.resto_id;

	try {
		let data = await db.OpeningHour.findAll({ where: { resto_id: id } });
		data.push({ restaurant: await db.Restaurant.findByPk(id) });
		dataResponse(res, data, 'All Opening Hours has been retrieved', 'No Opening Hours has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve Opening Hour
exports.getOpeningHour = async (req, res) => {
	const id = req.params.id;

	try {
		let data = await db.OpeningHour.findByPk(id, { include: ['restaurant'] });
		dataResponse(res, data, 'Opening Hour has been retrieved', 'No Opening Hour has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Update Opening Hour
exports.updateOpeningHour = async (req, res) => {
	const id = req.params.id;
	req.body.updated_by = req.user.user_id;

	try {
		let result = await db.OpeningHour.update(req.body, {
			where: { openhrs_id: id },
		});
		if (result) {
			let data = await db.OpeningHour.findByPk(id, { include: ['updated', 'restaurant'] });
			dataResponse(res, data, 'Opening has been successfully updated', 'No Opening has been successfully updated');
		} else {
			errResponse(res, 'Error in updating Opening Hour');
		}
	} catch (err) {
		errResponse(res, err);
	}
};

// * Delete Opening Hour
exports.deleteOpeningHour = async (req, res) => {
	const id = req.params.id;
	req.body.deleted_by = req.user.user_id;

	let del = await db.OpeningHour.destroy({
		where: {
			openhrs_id: id,
		},
	});

	if (del) {
		await db.OpeningHour.update(req.body, {
			where: { openhrs_id: id },
			paranoid: false,
		});
		let data = await db.OpeningHour.findByPk(id, {
			paranoid: false,
			include: ['deleted', 'restaurant'],
		});
		dataResponse(
			res,
			data,
			'Opening Hour has been successfully deleted',
			'No Opening Hour has been successfully deleted'
		);
	} else {
		errResponse(res, 'Error in deleting Opening Hour');
	}
};
