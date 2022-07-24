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
				restocatg_id: uuidv4(), // ! wag galawin
				restocatg_name: '',
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				restocatg_id: uuidv4(), // ! wag galawin
				restocatg_name: '',
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				restocatg_id: uuidv4(), // ! wag galawin
				restocatg_name: '',
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				restocatg_id: uuidv4(), // ! wag galawin
				restocatg_name: '',
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				restocatg_id: uuidv4(), // ! wag galawin
				restocatg_name: '',
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
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
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000001.png', // ! wag galawin
				restocatg_id: restoCatRows[1].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000002.png', // ! wag galawin
				restocatg_id: restoCatRows[2].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000003.png', // ! wag galawin
				restocatg_id: restoCatRows[3].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000004.png', // ! wag galawin
				restocatg_id: restoCatRows[4].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000005.png', // ! wag galawin
				restocatg_id: restoCatRows[5].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000006.png', // ! wag galawin
				restocatg_id: restoCatRows[1].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000007.png', // ! wag galawin
				restocatg_id: restoCatRows[2].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000008.png', // ! wag galawin
				restocatg_id: restoCatRows[3].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000009.png', // ! wag galawin
				restocatg_id: restoCatRows[4].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				resto_id: uuidv4(), // ! wag galawin
				resto_no: `RTO-${Date.now() * 2}`, // ! wag galawin
				resto_name: '',
				resto_email: '',
				resto_phone: '', // ! 11 digits only and only starts with 09...
				resto_landline: '', // ! 8 digits only
				resto_website: '',
				resto_img: 'resto_img-000000000010.png', // ! wag galawin
				restocatg_id: restoCatRows[5].restocatg_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
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
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[1].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[2].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[3].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[4].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[5].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[6].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[7].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[8].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				is_default: '1', // ! wag galawin
				resto_id: restaurantRows[9].resto_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
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
