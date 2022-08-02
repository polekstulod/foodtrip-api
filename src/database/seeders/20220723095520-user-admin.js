'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.bulkInsert('Users', [
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 7}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Paul',
				middle_name: null,
				last_name: 'Tulod',
				email_address: 'paultulod@pm.me',
				phone_number: '09451152076',
				gender: 'Male',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 16}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Micah',
				middle_name: null,
				last_name: 'Villaruz',
				email_address: 'micahmvillaruz@gmail.com',
				phone_number: '09561437674',
				gender: 'Female',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
			},
			/*
				! Palitan yung
				TODO first_name 
				TODO middle_name optional gawin null if blank
				TODO last_name 
				TODO email_address 
				TODO phone_number 
				TODO gender 
			 */
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 20}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Micah',
				middle_name: null,
				last_name: 'Villaruz',
				email_address: 'micahmvillaruz@gmail.com',
				phone_number: '09561437674',
				gender: 'Female',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 21}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Micah',
				middle_name: null,
				last_name: 'Villaruz',
				email_address: 'micahmvillaruz@gmail.com',
				phone_number: '09561437674',
				gender: 'Female',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 22}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Micah',
				middle_name: null,
				last_name: 'Villaruz',
				email_address: 'micahmvillaruz@gmail.com',
				phone_number: '09561437674',
				gender: 'Female',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 23}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Micah',
				middle_name: null,
				last_name: 'Villaruz',
				email_address: 'micahmvillaruz@gmail.com',
				phone_number: '09561437674',
				gender: 'Female',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 24}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Micah',
				middle_name: null,
				last_name: 'Villaruz',
				email_address: 'micahmvillaruz@gmail.com',
				phone_number: '09561437674',
				gender: 'Female',
				user_type: 'Admin',
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
