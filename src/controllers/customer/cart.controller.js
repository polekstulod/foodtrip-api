const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

// * Add to Cart
exports.addToCart = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const dishID = req.params.dishID;
	const userID = req.user.user_id;
	req.body.quantity = 1;

	// * Check if dish is existing, if then, Add quantity
	const checkDish = await db.CartDetail.findOne({ where: { dish_id: dishID } });
	if (!(checkDish === null)) {
		const dishDetails = await db.Dish.findByPk(checkDish.dish_id);
		await calcQuantity(req.body.quantity, checkDish.cartdetail_id, 'add');
		await db.CartDetail.update(
			{ subtotal: parseFloat(checkDish.subtotal) + parseFloat(dishDetails.dish_price) },
			{ where: { cartdetail_id: checkDish.cartdetail_id } }
		);
		await calcCartTotal(dishDetails.dish_price, userID, 'add');
		const data = await db.CartDetail.findByPk(checkDish.cartdetail_id);
		dataResponse(res, data, 'Add Quantity Successfully', 'Add Quantity Failed');
	} else {
		const dishData = await db.Dish.findByPk(dishID);
		const checkCart = await db.Cart.findOne({ where: { created_by: userID } });

		// * Calculate Subtotal when Adding to Cart
		req.body.subtotal = parseFloat(dishData.dish_price) * parseFloat(req.body.quantity);

		// * Check if there is existing Cart
		if (checkCart == null) {
			const cartData = await db.Cart.create({
				resto_id: dishData.resto_id,
				created_by: userID,
				cart_total: req.body.subtotal,
			});
			req.body.cart_id = cartData.cart_id;
		} else {
			req.body.cart_id = checkCart.cart_id;
			await calcCartTotal(req.body.subtotal, userID, 'add');
		}
		req.body.dish_id = dishID;

		await db.CartDetail.create(req.body);

		const data = await db.Cart.findOne({ where: { created_by: userID }, include: ['cart_dishes'] });
		dataResponse(res, data, 'Dish has been successfully added to Cart', 'No Dish has been successfully added to Cart');
	}
};

// * Replace Cart
exports.replaceCart = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const userID = req.user.user_id;
	const checkCart = await db.Cart.findOne({ where: { created_by: userID } });
	await db.CartDetail.destroy({ where: { cart_id: checkCart.cart_id } });
	await db.Cart.destroy({ where: { created_by: userID } });

	this.addToCart(req, res);
};

// * Find Cart
exports.getCart = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const userID = req.user.user_id;

	try {
		const data = await db.Cart.findOne({
			where: { created_by: userID },
			include: [{ model: db.Dish, as: 'cart_dishes', include: ['dish_category'] }, 'restaurant'],
		});
		if (data == null) emptyDataResponse(res, 'Cart is empty');
		else dataResponse(res, data, 'Cart has been successfully retrieved', 'No Cart has been successfully retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Add Quantity
exports.addQuantity = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const cartDetailsID = req.params.cartDetailsID;
	const userID = req.user.user_id;

	const cartDetails = await db.CartDetail.findByPk(cartDetailsID);
	const dishDetails = await db.Dish.findByPk(cartDetails.dish_id);

	try {
		await calcQuantity(1, cartDetailsID, 'add');
		await db.CartDetail.update(
			{ subtotal: parseFloat(cartDetails.subtotal) + parseFloat(dishDetails.dish_price) },
			{ where: { cartdetail_id: cartDetailsID } }
		);
		await calcCartTotal(dishDetails.dish_price, userID, 'add');
		const data = await db.CartDetail.findByPk(cartDetailsID);

		dataResponse(res, data, 'Added Dish Quantity Successfully', 'Added Dish Quantity Failed');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Subract Quantity
exports.subQuantity = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const cartDetailsID = req.params.cartDetailsID;
	const userID = req.user.user_id;

	const cartDetails = await db.CartDetail.findByPk(cartDetailsID);
	const dishDetails = await db.Dish.findByPk(cartDetails.dish_id);

	if (cartDetails.quantity == 1) errResponse(res, 'Cannot Subract Dish Quantity ');
	else {
		try {
			await calcQuantity(1, cartDetailsID, 'minus');
			await db.CartDetail.update(
				{ subtotal: parseFloat(cartDetails.subtotal) - parseFloat(dishDetails.dish_price) },
				{ where: { cartdetail_id: cartDetailsID } }
			);
			await calcCartTotal(dishDetails.dish_price, userID, 'sub');
			const data = await db.CartDetail.findByPk(cartDetailsID);

			dataResponse(res, data, 'Subtracted Dish Quantity Successfully', 'Subtracted Dish Quantity Failed');
		} catch (err) {
			errResponse(res, err);
		}
	}
};

// * Delete Cart Detail
exports.deleteCartDetail = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const cartDetailID = req.params.cartDetailsID;
	const userID = req.user.user_id;

	try {
		await db.CartDetail.destroy({ where: { cartdetail_id: cartDetailID } });
		const cart = await db.CartDetail.findAll();
		if (cart.length === 0) {
			await db.Cart.destroy({ where: { created_by: userID } });
		}
		emptyDataResponse(res, 'Cart Detail has been deleted successfully');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Delete Cart
exports.deleteCart = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const userID = req.user.user_id;

	const checkCart = await db.Cart.findOne({ where: { created_by: userID } });

	try {
		await db.CartDetail.destroy({ where: { cart_id: checkCart.cart_id } });

		await db.Cart.destroy({ where: { created_by: userID } });

		emptyDataResponse(res, 'Cart has been deleted successfully');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Calculate Cart Total
calcCartTotal = async (val, userID, sign) => {
	const cartData = await db.Cart.findOne({ where: { created_by: userID } });
	await db.Cart.update(
		{
			cart_total:
				sign === 'add'
					? parseFloat(cartData.cart_total) + parseFloat(val)
					: parseFloat(cartData.cart_total) - parseFloat(val),
		},
		{ where: { created_by: userID } }
	);
};

// * Calculate Quantity
calcQuantity = async (val, id, sign) => {
	const data = await db.CartDetail.findByPk(id);

	await db.CartDetail.update(
		{
			quantity:
				sign === 'add' ? parseFloat(data.quantity) + parseFloat(val) : parseFloat(data.quantity) - parseFloat(val),
		},
		{ where: { cartdetail_id: id } }
	);
};
