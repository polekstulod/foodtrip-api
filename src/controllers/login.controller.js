const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (data) => {
	return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '7200s' });
};

exports.login = (req, res) => {
	if (
		String(req.body.email_address) === '' ||
		String(req.body.password) === ''
	) {
		res.status(500).send({
			error: true,
			data: [],
			message: ['Username or Password is empty.'],
		});
	}

	User.findOne({
		where: { email_address: req.body.email_address, status: 'Active' },
	})
		.then((data) => {
			if (data) {
				bcrypt.compare(
					req.body.password,
					data.password,
					function (err, result) {
						if (result) {
							res.send({
								error: false,
								data: data,
								token: generateToken({
									user_id: data.user_id,
									name: data.first_name,
									email_address: data.email_address,
								}),
								message: [process.env.SUCCESS_RETRIEVED],
							});
						} else {
							res.status(500).send({
								error: true,
								data: [],
								message: ['Invalid username and Password.'],
							});
						}
					}
				);
			} else {
				res.status(500).send({
					error: true,
					data: [],
					message: ['Username does not exists.'],
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				error: true,
				data: [],
				message:
					err.errors.map((e) => e.message) || process.env.GENERAL_ERROR_MSG,
			});
		});
};