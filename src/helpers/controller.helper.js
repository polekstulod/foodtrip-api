exports.checkAuthorization = (req, res, user_type) => {
	// Check if user_type param is null
	if (user_type == null) {
		res.status(500).send('`user_type` parameter is required');
		return false;
	}

	// Check if user_type param has valid value
	const validuser_type = ['Customer', 'Resto_Admin', 'Admin'].some((role) => role === user_type);

	// Validate user_type parameter
	if (!validuser_type) {
		res.status(500).send('The value for `user_type` parameter is invalid');
		return false;
	}

	// Check if user is not authorized
	if (!(req.user != null && req.user.user_type === user_type)) {
		res.status(401).send('Oops! You are unauthorized to view your request');
		return false;
	}
	return true;
};
