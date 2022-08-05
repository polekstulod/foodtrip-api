const { v4: uuidv4 } = require('uuid');
('use strict');

module.exports = {
	async up(queryInterface, Sequelize) {
		const restoCat = await queryInterface.sequelize.query(
			`SELECT restocatg_id FROM restocategories ORDER BY restocategories.restocatg_name ASC;`
		);
		const restoCatRows = restoCat[0];

		// * Restaurants
		return await queryInterface.bulkInsert('Restaurants', [
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 1}`,
				resto_name: 'Conti’s Bakeshop & Restaurant',
				resto_email: 'ctf.contis@yahoo.com',
				resto_phone: '09514548948',
				resto_landline: '8921 3475',
				resto_website: 'www.contis.ph',
				resto_img: 'resto_img-000000000011.png',
				restocatg_id: restoCatRows[0].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 2}`,
				resto_name: 'The French Baker',
				resto_email: 'info@thefrenchbaker.com',
				resto_phone: '09298564842',
				resto_landline: '+63 (2) 84706210',
				resto_website: 'thefrenchbaker.com',
				resto_img: 'resto_img-000000000012.png',
				restocatg_id: restoCatRows[0].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 3}`,
				resto_name: 'Cafe France',
				resto_email: 'cf_unave@cafefrance.net',
				resto_phone: '+63 (2) 8 254 9788',
				resto_landline: '+63 (2) 8 523 5555',
				resto_website: 'www.cafefrance.net',
				resto_img: 'resto_img-000000000013.png',
				restocatg_id: restoCatRows[1].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 4}`,
				resto_name: "Seattle's Best Coffee",
				resto_email: 'guestservice@sbc.com.ph',
				resto_phone: '+63 (2) 8 421 2043',
				resto_landline: '+63 (2) 8 421 2043',
				resto_website: 'seattlesbest.com.ph',
				resto_img: 'resto_img-000000000014.png',
				restocatg_id: restoCatRows[1].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 5}`,
				resto_name: 'Lemuria Gourmet Restaurant',
				resto_email: 'lemuria@brumms.com.ph',
				resto_phone: '+63 (927) 428 4202',
				resto_landline: '93693311',
				resto_website: 'www.lemuria.com.ph',
				resto_img: 'resto_img-000000000015.png',
				restocatg_id: restoCatRows[3].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 6}`,
				resto_name: 'Ilustrado Restaurant',
				resto_email: 'catering@ilustradorestaurant.com',
				resto_phone: '+63 (998) 850 2735',
				resto_landline: '+63 (2) 527 3674',
				resto_website: 'ilustradorestaurant.com.ph',
				resto_img: 'resto_img-000000000016.png',
				restocatg_id: restoCatRows[3].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 7}`,
				resto_name: 'GOGI Korean BBQ',
				resto_email: 'gogi,philippines@gmail.com',
				resto_phone: '+63 (916) 595 0178',
				resto_landline: '6598-9864',
				resto_website: 'www.facebook.com/gogi.ph',
				resto_img: 'resto_img-000000000017.png',
				restocatg_id: restoCatRows[4].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 8}`,
				resto_name: 'Hwarang Korean Restaurant',
				resto_email: 'hwarang.kr@gmail.com',
				resto_phone: '09563278559',
				resto_landline: '+63 (2) 8 782 9626',
				resto_website: 'www.hwarangkreso.com',
				resto_img: 'resto_img-000000000018.png',
				restocatg_id: restoCatRows[4].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 9}`,
				resto_name: 'Papa Johns Pizza',
				resto_email: 'info@papajohns.com.ph',
				resto_phone: '09154548668',
				resto_landline: '+63 (2) 8 631 8689',
				resto_website: 'papajohns.com.ph',
				resto_img: 'resto_img-000000000019.png',
				restocatg_id: restoCatRows[5].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 10}`,
				resto_name: 'Pizza Hut',
				resto_email: 'phutcsc@pizzahut.com.ph',
				resto_phone: '09884546235',
				resto_landline: '828-70071',
				resto_website: 'https://www.pizzahut.com.ph/',
				resto_img: 'resto_img-000000000020.png',
				restocatg_id: restoCatRows[5].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
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
