const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');

exports.getAllCouriers = async (req, res) => {
	if (!checkAuthorization(req, res, 'Resto_Admin')) {
		return;
	}
	try {
		const data = await db.Courier.findAll();
		dataResponse(res, data, 'All couriers has been retrieved', 'No couriers has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
