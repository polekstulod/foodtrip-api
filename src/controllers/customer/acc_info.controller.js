const db = require('../../models');
const bcrypt = require('bcrypt');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

// * Retrieve User Account Info
exports.getAccountInfo = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.user.user_id;

	try {
		let data = await db.User.findByPk(id);
		dataResponse(res, data, 'Account Info has been retrieved', 'No Account Info has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Update User Account Info
exports.updateAcctInfo = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.user.user_id;
	req.body.updated_by = req.user.user_id;

	if (req.body.password) {
		req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS));
	}

	try {
		await db.User.update(req.body, {
			where: { user_id: id },
		});
		let data = await db.User.findByPk(id, { include: ['updated'] });
		dataResponse(res, data, 'User Account Info has been updated', 'No User Account Info has been updated');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Verify Password
exports.verifyPassword = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.user.user_id;
	const password = req.body.password;
	let data = await db.User.findByPk(id, { attributes: ['password'] });

	const match = await bcrypt.compare(password, data.password);

	match ? emptyDataResponse(res, 'Password is match') : errResponse(res, 'Password is not match');
};

// * Update Password
exports.updatePassword = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.user.user_id;
	req.body.updated_by = req.user.user_id;
	req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUND));

	try {
		let result = await db.User.update(req.body, {
			where: { user_id: id },
		});

		if (result) {
			let data = await db.User.findByPk(id, { include: ['updated'] });
			dataResponse(res, data, 'User Password has been updated successfully', 'User Password was not updated');
		} else {
			errResponse(res, 'Error in updating Password');
		}
	} catch (err) {
		errResponse(res, err);
	}
};
