// * Import required modules
const express = require('express');
const dotenv = require('dotenv');
const db = require('./src/models');

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

// * Initialize express
var app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(`${process.env.API_VERSION}/user`, userRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
