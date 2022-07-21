const db = require('../models');
const { dataResponse } = require('../helpers/controller.helper');

exports.validateCart = async (req, res, next) => {
	const userID = req.user.user_id;
	const dishID = req.params.dishID;

	let cartDetails = await db.Cart.findOne({ where: { created_by: userID } });
	if (cartDetails == null) return next();

	let dishDetails = await db.Dish.findByPk(dishID);

	if (!(cartDetails.resto_id === dishDetails.resto_id)) {
		dataResponse(res, { dish_id: dishID, quantity: req.body.quantity }, 'Replace Cart?');
	} else {
		next();
	}
};
