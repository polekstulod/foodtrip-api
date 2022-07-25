'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
	async up(queryInterface, Sequelize) {
		// * Restaurant Categories
		await queryInterface.bulkInsert('RestoCategories', [
			// * Example
			{
				restocatg_id: uuidv4(),
				restocatg_name: 'Fast Food',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				restocatg_id: uuidv4(),
				restocatg_name: 'Fine Dining',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				restocatg_id: uuidv4(),
				restocatg_name: 'Cafe',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				restocatg_id: uuidv4(),
				restocatg_name: 'Pizzerias',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				restocatg_id: uuidv4(),
				restocatg_name: 'Korean',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				restocatg_id: uuidv4(),
				restocatg_name: 'Bakery',
				date_created: new Date(),
				date_updated: new Date(),
			},
		]);

		const restoCat = await queryInterface.sequelize.query(
			`SELECT restocatg_id FROM restocategories ORDER BY restocategories.restocatg_name ASC;`
		);
		const restoCatRows = restoCat[0];

		// * Restaurants
		await queryInterface.bulkInsert('Restaurants', [
			// * Example
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2}`,
				resto_name: 'Jollibot',
				resto_email: 'jollibee@gmail.com',
				resto_phone: '09451152076',
				resto_landline: '12345678',
				resto_website: 'www.jollibee.com',
				resto_img: 'resto_img-000000000000.png',
				restocatg_id: restoCatRows[0].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				resto_id: uuidv4(),
				resto_no: `RTO-${Date.now() * 2 + 1}`,
				resto_name: 'Gerrys Grill',
				resto_email: 'gerrysgrill@gmail.com',
				resto_phone: '09175011273',
				resto_landline: '8332-1111',
				resto_website: 'www.gerrysgrill.com.ph',
				resto_img: 'resto_img-000000000001.png',
				restocatg_id: restoCatRows[1].restocatg_id,
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
				resto_img: 'resto_img-000000000002.png',
				restocatg_id: restoCatRows[2].restocatg_id,
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
				resto_img: 'resto_img-000000000003.png',
				restocatg_id: restoCatRows[3].restocatg_id,
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
				resto_img: 'resto_img-000000000004.png',
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
				resto_img: 'resto_img-000000000005.png',
				restocatg_id: restoCatRows[5].restocatg_id,
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
				resto_img: 'resto_img-000000000006.png',
				restocatg_id: restoCatRows[1].restocatg_id,
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
				resto_img: 'resto_img-000000000007.png',
				restocatg_id: restoCatRows[2].restocatg_id,
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
				resto_img: 'resto_img-000000000008.png',
				restocatg_id: restoCatRows[3].restocatg_id,
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
				resto_img: 'resto_img-000000000009.png',
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
				resto_img: 'resto_img-000000000010.png',
				restocatg_id: restoCatRows[5].restocatg_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
		]);

		const restaurants = await queryInterface.sequelize.query(
			`SELECT resto_id FROM restaurants ORDER BY restaurants.resto_no ASC; `
		);
		const restaurantRows = restaurants[0];

		// * Restaurant Address
		await queryInterface.bulkInsert('Addresses', [
			// * Example
			{
				address_id: uuidv4(),
				address_1: '92 Fairview Terraces',
				address_2: '',
				barangay: 'Pasong Putik',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1424',
				is_default: '1',
				resto_id: restaurantRows[0].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: 'Commonwealth Avenue ',
				address_2: 'Calle Bistro',
				barangay: 'Ever Commonwealth',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1121',
				is_default: '1',
				resto_id: restaurantRows[1].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: ' Diliman Commercial Center',
				address_2: '',
				barangay: '46 Commonwealth Ave',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1121',
				is_default: '1',
				resto_id: restaurantRows[2].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '103-G',
				address_2: 'Commonwealth Ave.',
				barangay: 'Fairview',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1121',
				is_default: '1',
				resto_id: restaurantRows[3].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '28 Sgt. Esguerra Ave',
				address_2: '',
				barangay: ' Diliman',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '	1101',
				is_default: '1',
				resto_id: restaurantRows[4].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '1118 Commonwealth Ave',
				address_2: 'Novaliches',
				barangay: 'Pasong Putik',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1118',
				is_default: '1',
				resto_id: restaurantRows[5].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: 'Block 41, Lot, 22 Ascension Ave',
				address_2: 'Novaliches',
				barangay: 'North Fairview',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1121',
				is_default: '1',
				resto_id: restaurantRows[6].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: 'M32G+H2J',
				address_2: '',
				barangay: 'Diliman',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1101',
				is_default: '1',
				resto_id: restaurantRows[7].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: 'Commercial Center',
				address_2: 'Regalado Hive',
				barangay: '2/F',
				city: ' Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1118',
				is_default: '1',
				resto_id: restaurantRows[8].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '303 Tomas',
				address_2: 'Morato Ave',
				barangay: 'Diliman',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1101',
				is_default: '1',
				resto_id: restaurantRows[9].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: 'Fairview Centermall,Don Mariano', // ! room, house number, block and lot
				address_2: 'Marcos Ave. cor. Regalado', // ! optional
				barangay: 'Novaliches', // ! text or number
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1118', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[10].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
		]);

		// * Resto-Admin User
		await queryInterface.bulkInsert('Users', [
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`,
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Yoorim',
				middle_name: '',
				last_name: 'Heo',
				email_address: 'yoorimie@gmail.com',
				user_type: 'Resto_Admin',
				resto_id: restaurantRows[0].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[1].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[2].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[3].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[4].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[5].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[6].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[7].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[8].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[9].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: `USR-${Math.floor(Date.now() * 1.5)}`, // ! wag galawin
				password: await bcrypt.hash('RestoAdmin@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				user_type: 'Resto_Admin', // ! wag galawin
				resto_id: restaurantRows[10].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
		]);

		// * Restaurant Opening Hours
		return await queryInterface.bulkInsert('OpeningHours', [
			// * Example
			{
				openhrs_id: uuidv4(),
				resto_id: restaurantRows[0].resto_id,
				day: 'Monday',
				open_time: '09:00:00',
				close_time: '21:00:00',
			},
			{
				openhrs_id: uuidv4(),
				resto_id: restaurantRows[0].resto_id,
				day: 'Tuesday',
				open_time: '09:00:00',
				close_time: '21:00:00',
			},
			{
				openhrs_id: uuidv4(),
				resto_id: restaurantRows[0].resto_id,
				day: 'Wednesday',
				open_time: '09:00:00',
				close_time: '21:00:00',
			},
			{
				openhrs_id: uuidv4(),
				resto_id: restaurantRows[0].resto_id,
				day: 'Thursday',
				open_time: '09:00:00',
				close_time: '21:00:00',
			},
			{
				openhrs_id: uuidv4(),
				resto_id: restaurantRows[0].resto_id,
				day: 'Friday',
				open_time: '09:00:00',
				close_time: '21:00:00',
			},
			{
				openhrs_id: uuidv4(),
				resto_id: restaurantRows[0].resto_id,
				day: 'Saturday',
				open_time: '09:00:00',
				close_time: '21:00:00',
			},
			// * Restaurant 1
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[1].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[1].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[1].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[1].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[1].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[1].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			// * Restaurant 2
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[2].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[2].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[2].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[2].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[2].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[2].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			// * Restaurant 3
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[3].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[3].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[3].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[3].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[3].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[3].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			// * Restaurant 4
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[4].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[4].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[4].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[4].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[4].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[4].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			// * Restaurant 5
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[5].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[5].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[5].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[5].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[5].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[5].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			// * Restaurant 6
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[6].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[6].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[6].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[6].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[6].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[6].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			// * Restaurant 7
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[7].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[7].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[7].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[7].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[7].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[7].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			// * Restaurant 8
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[8].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[8].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[8].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[8].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[8].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[8].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			// * Restaurant 9
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[9].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[9].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[9].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[9].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[9].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[9].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			// * Restaurant 10
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[10].resto_id, // ! wag galawin
				day: 'Monday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[10].resto_id, // ! wag galawin
				day: 'Tuesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[10].resto_id, // ! wag galawin
				day: 'Wednesday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[10].resto_id, // ! wag galawin
				day: 'Thursday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[10].resto_id, // ! wag galawin
				day: 'Friday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
			},
			{
				openhrs_id: uuidv4(), // ! wag galawin
				resto_id: restaurantRows[10].resto_id, // ! wag galawin
				day: 'Saturday', // ! wag galawin
				open_time: '', // ! HH:MM:SS Format
				close_time: '', // ! HH:MM:SS Format
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
