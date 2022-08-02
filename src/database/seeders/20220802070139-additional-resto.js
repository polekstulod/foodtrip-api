'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		const restoCat = await queryInterface.sequelize.query(
			`SELECT restocatg_id FROM restocategories ORDER BY restocategories.restocatg_name ASC;`
		);
		const restoCatRows = restoCat[0];

		// * Restaurants
		return await queryInterface.bulkInsert('Restaurants', [
			/* 
        ! Palitan yung
        TODO resto_name 
        TODO resto_email 
        TODO resto_phone 
        TODO resto_landline 
        TODO resto_website
        TODO restocatg_id (nakadepends kung pang ilan yung category)
     */
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 1}`,
				resto_name: 'Gerrys Grill',
				resto_email: 'gerrysgrill@gmail.com',
				resto_phone: '09175011273',
				resto_landline: '8332-1111',
				resto_website: 'www.gerrysgrill.com.ph',
				resto_img: 'resto_img-000000000011.png',
				restocatg_id: restoCatRows[3].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 2}`,
				resto_name: 'Starbucks',
				resto_email: 'customer@rustancoffee.ph',
				resto_phone: '09457157924',
				resto_landline: '8462-6262 ',
				resto_website: 'www.starbucks.ph',
				resto_img: 'resto_img-000000000012.png',
				restocatg_id: restoCatRows[1].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 3}`,
				resto_name: 'Angels Pizza',
				resto_email: 'angelspizza@gmail.com',
				resto_phone: '09287635411',
				resto_landline: '8922-2222',
				resto_website: 'www.angelspizza.com.ph',
				resto_img: 'resto_img-000000000013.png',
				restocatg_id: restoCatRows[5].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 4}`,
				resto_name: 'Seoul Train Korean BBQ',
				resto_email: 'eat@seoultrain.ph',
				resto_phone: '09177722203',
				resto_landline: '8733-1111',
				resto_website: 'http://bit.ly/minimall-st',
				resto_img: 'resto_img-000000000014.png',
				restocatg_id: restoCatRows[4].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 5}`,
				resto_name: 'Pan De Manila',
				resto_email: 'pandemanila@gmail.com',
				resto_phone: '09325478165',
				resto_landline: '8433-5555',
				resto_website: 'www.pandemanila.com.ph',
				resto_img: 'resto_img-000000000015.png',
				restocatg_id: restoCatRows[0].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 6}`,
				resto_name: 'The Melting Potluck',
				resto_email: 'meltingpotluck@gmail.com',
				resto_phone: '09152533335',
				resto_landline: '8533-3335',
				resto_website: 'www.meltingpotluck.com.ph',
				resto_img: 'resto_img-000000000016.png',
				restocatg_id: restoCatRows[3].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 7}`,
				resto_name: 'The Fat Seed Cafe',
				resto_email: 'thefatseedph@gmail.com',
				resto_phone: '09452781134',
				resto_landline: '8936-2113',
				resto_website: 'www.thefatseedph.com',
				resto_img: 'resto_img-000000000017.png',
				restocatg_id: restoCatRows[1].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 8}`,
				resto_name: 'Yellow Cab Pizza Co.',
				resto_email: 'onlinesupport@yellowcabpizza.com',
				resto_phone: '09188035571',
				resto_landline: '8789-9999',
				resto_website: 'www.delivery.yellowcabpizza.com',
				resto_img: 'resto_img-000000000018.png',
				restocatg_id: restoCatRows[5].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 9}`,
				resto_name: 'OGANE Restaurant',
				resto_email: 'paradise30399@yahoo.com.ph',
				resto_phone: '09557428535',
				resto_landline: '7794-2785',
				resto_website: 'oganerestaurant.com.ph',
				resto_img: 'resto_img-000000000019.png',
				restocatg_id: restoCatRows[4].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 10}`,
				resto_name: 'Goldilocks',
				resto_email: 'customercare@goldilocks.com.ph',
				resto_phone: '09862544713',
				resto_landline: '2532-2718',
				resto_website: 'www.goldilocks.com.ph',
				resto_img: 'resto_img-000000000020.png',
				restocatg_id: restoCatRows[0].restocatg_id,
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
