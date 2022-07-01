exports.checkAuthorization = (req, res, user_type) => {
	if (user_type == null) {
		res.status(500).send('`user_type` parameter is required');
		return false;
	}

	const validuser_type = ['Customer', 'Resto_Admin', 'Admin'].some((role) => role === user_type);

	if (!validuser_type) {
		res.status(500).send('The value for `user_type` parameter is invalid');
		return false;
	}

	if (!(req.user != null && req.user.user_type === user_type)) {
		res.status(401).send('Oops! You are unauthorized to view your request');
		return false;
	}
	return true;
};

exports.errResponse = (res, err) => {
	return res.status(500).send({
		error: true,
		message: `${err}`,
	});
};

exports.dataResponse = (res, data, withDataMsg, nullDataMsg) => {
	if (data.length === 0 || data == null)
		return res.send({
			error: false,
			data: [],
			message: nullDataMsg,
		});

	return res.send({
		error: false,
		data: data,
		message: withDataMsg,
	});
};

exports.emptyDataResponse = (res, message) => {
	return res.send({
		error: false,
		message: message,
	});
};
