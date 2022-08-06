const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

exports.getAllOrders = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.user.resto_id;

	try {
		const data = await db.Order.findAll({ where: { resto_id: id }, include: ['created'] });
		dataResponse(res, data, 'All Orders has been retrieved', 'No Orders has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

exports.getOrder = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.orderID;

	try {
		const data = await db.Order.findOne({ where: { order_id: id }, include: ['address', 'created'] });
		dataResponse(res, data, 'Order has been retrieved', 'No Order has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

exports.inProcess = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.orderID;

	try {
		await db.Order.update(
			{ order_status: 'In Process', updated_by: req.user.user_id, date_processed: new Date() },
			{ where: { order_id: id } }
		);
		const data = await db.Order.findByPk(id);
		dataResponse(res, data, 'Order Status has been updated', 'No Order Status has been updated');
	} catch (err) {
		errResponse(res, err);
	}
};

exports.otw = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.orderID;
	req.body.tracking_no = `TRC-${Date.now() * 6}`;
	req.body.order_id = id;
	req.body.created_by = req.user.user_id;

	try {
		await db.Order.update(
			{ order_status: 'On the Way', updated_by: req.user.user_id, date_released: new Date() },
			{ where: { order_id: id } }
		);

		let data = await db.DeliveryDetails.create(req.body);
		dataResponse(
			res,
			data,
			'Delivery Details has been successfuly created',
			'No Delivery Details has been successfuly created'
		);
	} catch (err) {
		errResponse(res, err);
	}
};

exports.delivered = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.orderID;
	const orderDetails = await db.Order.findByPk(id, { include: ['delivery_details'] });

	try {
		await db.Order.update({ order_status: 'Delivered', updated_by: req.user.user_id }, { where: { order_id: id } });
		await db.DeliveryDetails.update(
			{ date_received: new Date(), updated_by: req.user.user_id },
			{ where: { delivery_id: orderDetails.delivery_details.delivery_id } }
		);

		const data = await db.Order.findByPk(id, { include: ['delivery_details'] });
		dataResponse(res, data, 'Order Status has been updated', 'No Order Status has been updated');
	} catch (err) {
		errResponse(res, err);
	}
};

exports.rejected = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}

	const id = req.params.orderID;

	try {
		await db.Order.update(
			{ order_status: 'Rejected', updated_by: req.user.user_id, date_cancelled: new Date() },
			{ where: { order_id: id } }
		);
		const data = await db.Order.findByPk(id);
		dataResponse(res, data, 'Order Status has been updated', 'No Order Status has been updated');
	} catch (err) {
		errResponse(res, err);
	}
};
