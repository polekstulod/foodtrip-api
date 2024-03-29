const db = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { dataResponse, errResponse, emptyDataResponse } = require('../../helpers/controller.helper');

const generateToken = (data) => {
	return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '12h' });
};

exports.login = async (req, res) => {
	if (String(req.body.email_address) === '' || String(req.body.password) === '') {
		return errResponse(res, 'Email or password is empty');
	}
	try {
		const data = await db.User.findOne({
			where: { email_address: req.body.email_address },
		});
		if (data) {
			bcrypt.compare(req.body.password, data.password, function (err, result) {
				if (result) {
					res.send({
						error: false,
						data: data,
						token: generateToken({
							user_id: data.user_id,
							name: `${data.first_name} ${data.last_name}`,
							email_address: data.email_address,
							resto_id: data.resto_id,
							user_type: data.user_type,
						}),
						message: 'User has been successfully login',
					});
				} else {
					errResponse(res, 'Incorrect email or password');
				}
			});
		} else {
			errResponse(res, 'Email does not exist');
		}
	} catch (err) {
		errResponse(res, err);
	}
};
