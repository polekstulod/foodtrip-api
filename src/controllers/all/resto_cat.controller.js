const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse } = require('../../helpers/controller.helper');

// * Retrieve all Restaurant Category
exports.getAllRestoCat = async (req, res) => {
	try {
		let data = await db.RestoCategory.findAll({ include: 'restaurants' });
		dataResponse(res, data, 'All Restaurant Category has been retrieved', 'No Restaurant Category has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};

// * Retrieve single Restaurant Category
exports.getRestoCat = async (req, res) => {
	const id = req.params.restoCatID;

	try {
		let data = db.RestoCategory.findByPk(id, { include: 'restaurants' });
		dataResponse(res, data, 'Restaurant Category has been retrieved', 'No Restaurant Category has been retrieved');
	} catch (err) {
		errResponse(res, err);
	}
};
