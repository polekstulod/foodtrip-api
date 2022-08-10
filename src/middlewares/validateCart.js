const db = require('../models');
const { dataResponse, errResponse } = require('../helpers/controller.helper');

exports.validateCart = async (req, res, next) => {
	const userID = req.user.user_id;
	const dishID = req.params.dishID;

	const cartDetails = await db.Cart.findOne({ where: { created_by: userID } });
	if (cartDetails == null) return next();

	const dishDetails = await db.Dish.findByPk(dishID);

	if (!(cartDetails.resto_id === dishDetails.resto_id)) {
		errResponse(res, 'Replace Cart');
	} else {
		next();
	}
};
