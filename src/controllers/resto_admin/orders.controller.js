const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

exports.getAllOrders = async (req, res) => {
	const id = req.user.resto_id;

	try {
		const data = await db.Order.findAll({ where: { resto_id: id } });
		dataResponse(res, data, 'All Orders has been retrieved', 'No Orders has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

exports.getOrder = async (req, res) => {
	const id = req.params.orderID;

	try {
		const data = await db.Order.findOne({ where: { order_id: id }, include: ['address', 'created'] });
		dataResponse(res, data, 'Order has been retrieved', 'No Order has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
