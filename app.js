// * Import required modules
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
