// * Import required modules
const express = require('express');
const dotenv = require('dotenv');
const db = require('./src/models');
const jwt = require('jsonwebtoken');

// * Get config variables
dotenv.config();

// * Authenticate Database connection
db.sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err);
	});

// * Sync Database tables
if (process.env.ALLOW_SYNC === 'true') {
	db.sequelize
		.sync({ alter: true })
		.then(() =>
			console.log('Done adding/updating the database based on the Models.')
		);
}

// * Routes
const userRoute = require('./src/routes/user.routes');
const loginRoute = require('./src/routes/login.routes');
const restaurantRoute = require('./src/routes/restaurant.routes');
const addressRoute = require('./src/routes/address.routes');

// * Initialize express
var app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
};

app.use(`${process.env.API_VERSION}/login`, loginRoute);
app.use(`${process.env.API_VERSION}/user`, authenticateToken, userRoute);
app.use(
	`${process.env.API_VERSION}/restaurant`,
	authenticateToken,
	restaurantRoute
);
app.use(`${process.env.API_VERSION}/address`, authenticateToken, addressRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

// TODO: Generate Token
// console.log(require('crypto').randomBytes(64).toString('hex'));
