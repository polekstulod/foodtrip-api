const db = require('../../models');
const { dataResponse, errResponse, emptyDataResponse, checkAuthorization } = require('../../helpers/controller.helper');
const dataTable = require('sequelize-datatables');

exports.getAllDeliveries = async (req, res) => {
	if (!checkAuthorization(req, res, 'Admin')) {
		return;
	}

	req.body = {
		draw: 1,
		columns: [
			{
				data: 'delivery_id',
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
		const data = await dataTable(db.DeliveryDetails, req.body, {
			include: [{ model: db.User, as: 'created', include: 'restaurant' }, 'order', 'courier'],
		});
		res.send(data);
	} catch (err) {
		errResponse(res, err);
	}
};
