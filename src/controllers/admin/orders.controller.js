const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

exports.getAllOrders = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	try {
		const data = await db.Order.findAll({ include: ['restaurant', 'created'] });
		dataResponse(res, data, 'All Orders has been retrieved', 'No Orders has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

exports.getOrder = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	const id = req.params.orderID;

	try {
		const data = await db.Order.findOne({
			where: { order_id: id },
			include: [
				'address',
				'created',
				'order_dishes',
				{ model: db.Restaurant, as: 'restaurant', include: ['restaurant_category'] },
				{ model: db.DeliveryDetails, as: 'delivery_details', include: ['courier'] },
			],
		});
		dataResponse(res, data, 'Order has been retrieved', 'No Order has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
