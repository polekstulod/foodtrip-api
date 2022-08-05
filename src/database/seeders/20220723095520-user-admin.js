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
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 16}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Micah',
				middle_name: null,
				last_name: 'Villaruz',
				email_address: 'micahmvillaruz@gmail.com',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 20}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Josiah',
				middle_name: null,
				last_name: 'Fallesgon',
				email_address: 'JosiahFallesgon@gmail.com',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 21}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Filwayne',
				middle_name: null,
				last_name: 'De Lara',
				email_address: 'Dfilwayne@gmail.com',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 22}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Ashlee Jude',
				middle_name: null,
				last_name: 'Delmundo',
				email_address: 'AJDelmundo@gmail.com',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 23}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Emman',
				middle_name: null,
				last_name: 'Peralta',
				email_address: 'EmmanPeralta@gmail.com',
				user_type: 'Admin',
				date_created: new Date(),
				date_updated: new Date(),
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
			},
			{
				user_id: uuidv4(),
				user_no: `USR-${Math.floor(Date.now() * 1.5) + 24}`,
				password: await bcrypt.hash('Admin@123', parseInt(process.env.SALT_ROUND)),
				first_name: 'Racquel',
				middle_name: null,
				last_name: 'Ulibas',
				email_address: 'RacquelUlibas@gmail.com',
				user_type: 'Admin',
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
