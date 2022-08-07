const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');
const dataTable = require('sequelize-datatables');

exports.getAllCouriers = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	req.body = {
		draw: 1,
		columns: [
			{
				data: 'courier_id',
				name: '',
				searchable: true,
				orderable: true,
				search: {
					value: '',
					regex: false,
				},
			},
		],
		order: [
			{
				column: 0,
				dir: 'asc',
			},
		],
		start: 0,
		length: 100,
		search: {
			value: '',
			regex: false,
		},
	};

	try {
		const data = await dataTable(db.Courier, req.body, { include: 'created' });
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
};
