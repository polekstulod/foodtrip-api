const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

// * Create Order
exports.createOrder = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const userID = req.user.user_id;
	const cartData = await db.Cart.findOne({ where: { created_by: userID } });

	req.body.order_no = `ODR-${Math.floor(Date.now() * 3.5)}`;
	req.body.created_by = userID;
	req.body.order_total = cartData.cart_total;
	req.body.resto_id = cartData.resto_id;
	try {
		const orderData = await db.Order.create(req.body);

		const cartDetails = await db.CartDetail.findAll({ attributes: ['quantity', 'subtotal', 'dish_id'] });

		let ordDetails = [];

		cartDetails.forEach((el) => {
			ordDetails.push({
				order_id: orderData.order_id,
				quantity: el.quantity,
				subtotal: el.subtotal,
				dish_id: el.dish_id,
			});
		});

		await db.OrderDetails.bulkCreate(ordDetails);
		await db.CartDetail.destroy({ where: {}, truncate: true });
		await db.Cart.destroy({ where: { created_by: userID } });

		dataResponse(res, orderData, 'Order has been successfully created', 'No Order has been successfully created');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieved All Order
exports.getAllOrders = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	try {
		const data = await db.Order.findAll({ include: ['order_dishes'] });
		dataResponse(res, data, 'All Orders has been retrieved', 'No Orders has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieved All Order
exports.getOrder = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.params.orderID;
	try {
		const data = await db.Order.findByPk(id, { include: ['order_dishes', 'address', 'restaurant'] });
		dataResponse(res, data, 'Order has been retrieved', 'No Order has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
