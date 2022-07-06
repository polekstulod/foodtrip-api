const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

// * Retrieve single Restaurant
exports.getRestaurant = (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.restoID;

	db.Restaurant.findByPk(id, {
		include: [
			'restaurant_category',
			{
				model: db.Dish,
				as: 'resto_dishes',
			},
		],
	})
		.then((data) => dataResponse(res, data, 'Restaurant has been retrieved', 'No Restaurant has been retrieved'))
		.catch((err) => errResponse(res, err));
};

// * Update Restaurant
exports.updateRestaurant = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.restoID;
	await db.Restaurant.findByPk(id, { attributes: ['resto_img'] }).then(
		(data) => (req.body.resto_img = data.resto_img.slice(-27))
	);
	req.body.updated_by = req.user.user_id;
	if (req.file !== undefined) req.body.resto_img = req.file.filename;

	db.Restaurant.update(req.body, {
		where: { resto_id: id },
	})
		.then((result) => {
			if (result) {
				db.Restaurant.findByPk(id, { include: ['updated'] }).then((data) => {
					dataResponse(res, data, 'Restaurant has been updated successfully', 'Restaurant was not updated');
				});
			} else {
				errResponse(res, err);
			}
		})
		.catch((err) => {
			errResponse(res, err);
		});
};
