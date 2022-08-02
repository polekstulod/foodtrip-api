'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		const restaurants = await queryInterface.sequelize.query(
			`SELECT resto_id FROM restaurants ORDER BY restaurants.resto_no ASC; `
		);
		const restaurantRows = restaurants[0];

		// * Resto-Admin User
		await queryInterface.bulkInsert('Users', [
			/* 
        ! Palitan yung
        TODO first_name
        TODO middle_name optional
        TODO last_name
        TODO email_address
       */
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 1}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Shyann',
				middle_name: 'Viola',
				last_name: 'Horne',
				email_address: 'Shyann@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[11].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 2}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Lee',
				middle_name: 'Caprice',
				last_name: 'Maynard',
				email_address: 'Lee@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[12].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 3}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Sydney',
				middle_name: 'Blayne',
				last_name: 'Bonilla',
				email_address: 'Sydney@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[13].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 4}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Roderick',
				middle_name: 'Varian',
				last_name: 'Keller',
				email_address: 'Roderick@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[14].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 5}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Leila',
				middle_name: 'Arden',
				last_name: 'Gilbert',
				email_address: 'Leila@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[15].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 6}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Killian',
				middle_name: 'Miranda',
				last_name: 'Alvarez',
				email_address: 'Killian@gmail.copm',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[16].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 7}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Kamryn',
				middle_name: 'Tyson',
				last_name: 'Dominguez',
				email_address: 'kamryn@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[17].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 8}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Shawn',
				middle_name: 'Murphy',
				last_name: 'White',
				email_address: 'Shawn@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[18].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 9}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Uriel',
				middle_name: 'Michael',
				last_name: 'Harvey',
				email_address: 'Uriel@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[19].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 10}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Dominique',
				middle_name: 'Jacklyn',
				last_name: 'Rollins',
				email_address: 'Dominique@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[20].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
