const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse } = require('../../helpers/controller.helper');

// * Retrieve all Restaurant Category
exports.getAllRestoCat = (req, res) => {
	db.RestoCategory.findAll({ include: 'restaurants' })
		.then((data) =>
			dataResponse(res, data, 'All Restaurant Category has been retrieved', 'No Restaurant Category has been retrieved')
		)
		.catch((err) => errResponse(res, err));
};

// * Retrieve single Restaurant Category
exports.getRestoCat = (req, res) => {
	const id = req.params.restoCatID;

	db.RestoCategory.findByPk(id, { include: 'restaurants' })
		.then((data) =>
			dataResponse(res, data, 'Restaurant Category has been retrieved', 'No Restaurant Category has been retrieved')
		)
		.catch((err) => errResponse(res, err));
};
