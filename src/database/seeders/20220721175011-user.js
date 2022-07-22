'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
	async up(queryInterface, Sequelize) {
		// * User Customers
		await queryInterface.bulkInsert('Users', [
			// * Example
			{
				user_id: uuidv4(),
				user_no: '16862518406',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'James Paul',
				middle_name: 'Lim',
				last_name: 'Tulod',
				email_address: 'jptulod123@gmail.com',
				phone_number: '09451152076',
				gender: 'Male',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			{
				user_id: uuidv4(), // ! wag galawin
				user_no: '', // ! 11 digits only (random numbers)
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)), // ! wag galawin
				first_name: '',
				middle_name: '', // ! optional lang to
				last_name: '',
				email_address: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				gender: '', // ! Male, Female or Others
				user_type: 'Customer', // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
		]);

		const users = await queryInterface.sequelize.query(`SELECT user_id from Users;`);
		const userRows = users[0];

		// * Customers Addresses
		return await queryInterface.bulkInsert('Addresses', [
			// * Example
			{
				address_id: uuidv4(),
				address_1: 'Block 8 Lot 34, Sunrise Street',
				address_2: 'Maligaya Subdivision',
				barangay: '177',
				city: 'Caloocan',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1424',
				full_name: 'James Paul L. Tulod',
				phone_number: '09451152076',
				is_default: '1',
				user_id: userRows[0].user_id,
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[1].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[2].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[3].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[4].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[5].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[6].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[7].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[8].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[9].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '1', // ! wag galawin
				user_id: userRows[10].user_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
			},
			// ! IMPORTANT: mauulit ulit yung address pero user 1-5 lang
			{
				address_id: uuidv4(), // ! wag galawin
				address_1: '', // ! room, house number, block and lot
				address_2: '', // ! optional
				barangay: '', // ! text or number
				city: '',
				province: '',
				region: '',
				zip_code: '', // ! 4 digits only
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '0', // ! wag galawin
				user_id: userRows[1].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '0', // ! wag galawin
				user_id: userRows[2].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '0', // ! wag galawin
				user_id: userRows[3].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '0', // ! wag galawin
				user_id: userRows[4].user_id, // ! wag galawin
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
				full_name: '',
				phone_number: '', // ! 11 digits only and only starts with 09...
				is_default: '0', // ! wag galawin
				user_id: userRows[5].user_id, // ! wag galawin
				date_created: new Date(), // ! wag galawin
				date_updated: new Date(), // ! wag galawin
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
