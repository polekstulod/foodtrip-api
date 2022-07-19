const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');
const dataTable = require('sequelize-datatables');

// * Create address
exports.createAddress = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	req.body.created_by = req.user.user_id;
	req.body.user_id = req.user.user_id;

	try {
		let data = await db.Address.create(req.body, { include: ['created'] });
		let result = await db.Address.findByPk(data.address_id, { include: ['created'] });
		dataResponse(res, result, 'Address has been successfully created', 'No Address has been successfully created');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve all Address
exports.getAllAddress = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.user.user_id;

	try {
		let data = await db.Address.findAll({ where: { user_id: id } });
		dataResponse(res, data, 'All Address has been retrieved', 'No Address has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve single Address
exports.getAddress = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const addressID = req.params.addressID;
	const id = req.user.user_id;

	try {
		let data = await db.Address.findAll({ where: { user_id: id, address_id: addressID } });
		dataResponse(res, data, 'Address has been retrieved', 'No Address has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Update Address
exports.updateAddress = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.params.addressID;
	req.body.updated_by = req.user.user_id;

	try {
		let result = await db.Address.update(req.body, {
			where: { address_id: id },
		});
		if (result == 1) {
			let data = await db.Address.findByPk(id, { include: ['updated'] });
			dataResponse(res, data, 'Address has been successfully updated', 'No Address has been successfully updated');
		} else {
			errResponse(res, 'Error in Updating Address');
		}
	} catch (err) {
		errResponse(res, err);
	}
};

// * Update Default Address
exports.updateDefaultAddress = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.params.addressID;
	const userID = req.user.user_id;
	req.body.updated_by = req.user.user_id;

	try {
		let defaultAdd = await db.Address.findAll({ where: { user_id: userID, is_default: 1 } });

		await db.Address.update({ is_default: '0' }, { where: { address_id: defaultAdd[0].address_id, is_default: '1' } });

		let result = await db.Address.update(
			{ is_default: '1' },
			{
				where: { address_id: id },
			}
		);

		if (result == 1) {
			let data = await db.Address.findByPk(id, { include: ['updated'] });
			dataResponse(
				res,
				data,
				'Default Address has been successfully updated',
				'No Default Address has been successfully updated'
			);
		} else {
			errResponse(res, 'Error in updating Default Address');
		}
	} catch (err) {
		errResponse(res, err);
	}
};

// * Delete Address
exports.deleteAddress = async (req, res) => {
	if (!checkAuthorization(req, res, 'Customer')) {
		return;
	}

	const id = req.params.addressID;
	req.body.deleted_by = req.user.user_id;

	try {
		let del = await db.Address.destroy({
			where: {
				address_id: id,
			},
		});

		if (del) {
			await db.Address.update(req.body, {
				where: { address_id: id },
				paranoid: false,
			});

			let data = await db.Address.findByPk(id, { paranoid: false, include: ['deleted'] });
			dataResponse(res, data, 'Address has been successfully deleted', 'No address has been successfully deleted.');
		} else {
			errResponse(res, 'Error in deleting Address');
		}
	} catch (err) {
		errResponse(res, err);
	}
};
