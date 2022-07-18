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
