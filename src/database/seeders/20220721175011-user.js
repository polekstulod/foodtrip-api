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
				user_id: uuidv4(),
				user_no: '85736284973',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Jerald',
				middle_name: '',
				last_name: 'Guillermo',
				email_address: 'jerald05@gmail.com',
				phone_number: '09482749382',
				gender: 'Male',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: '28493847194',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Shaine',
				middle_name: 'Rieta',
				last_name: 'Villanueva',
				email_address: 'shainevil30@gmail.com',
				phone_number: '09592749184',
				gender: 'Female',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: '57613947342',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Allison',
				middle_name: '',
				last_name: 'Locsin',
				email_address: 'allilocsin@gmail.com',
				phone_number: '09752048137',
				gender: 'Female',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: '76338263405',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Princess Anna',
				middle_name: 'Calban',
				last_name: 'Santos',
				email_address: 'princess28@gmail.com',
				phone_number: '09293819382',
				gender: 'Female',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: '30548190070',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Javen Brylle',
				middle_name: '',
				last_name: 'Dela Cruz',
				email_address: 'bryllejaven@gmail.com',
				phone_number: '09482048339',
				gender: 'Male',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: '44845067684',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Aphryll Joy',
				middle_name: '',
				last_name: 'Malazzab',
				email_address: 'ajmallazzab@gmail.com',
				phone_number: '09294482931',
				gender: 'Female',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: '32269710468',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Frankly',
				middle_name: '',
				last_name: 'Samson',
				email_address: 'samsonfrankly21@gmail.com',
				phone_number: '09382746311',
				gender: 'Male',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: '16503465624',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Mellissa',
				middle_name: 'Cruz',
				last_name: 'Taylor',
				email_address: 'melcruztaylor@gmail.com',
				phone_number: '09997492838',
				gender: 'Female',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: '92471390081',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'James',
				middle_name: '',
				last_name: 'Smith',
				email_address: 'smithjames11@gmail.com',
				phone_number: '09673849384',
				gender: 'Male',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: '55380739620',
				password: await bcrypt.hash('Customer@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Charles',
				middle_name: 'Julian',
				last_name: 'Fowler',
				email_address: 'charlesfowler@gmail.com',
				phone_number: '09243849261',
				gender: 'Male',
				user_type: 'Customer',
				date_created: new Date(),
				date_updated: new Date(),
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
