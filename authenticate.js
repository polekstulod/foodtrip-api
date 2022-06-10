const Sequelize = require('sequelize');

const sequelize = new Sequelize('foodtrip', 'root', '', {
	dialect: 'mysql',
});

// * Authenticate Connection to Database
async function authenticateToDB() {
	await sequelize.authenticate();
	console.log('Connection Successfully');
}

authenticateToDB().catch((err) => {
	console.log(err, 'Error connection to database');
});
