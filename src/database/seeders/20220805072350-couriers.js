const { v4: uuidv4 } = require('uuid');
('use strict');

module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.bulkInsert('Couriers', [
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5}`,
				courier_name: 'Grab Express',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5 + 1}`,
				courier_name: 'Black Arrow Express',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5 + 2}`,
				courier_name: 'Transportify',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5 + 3}`,
				courier_name: 'Gogo Xpress',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5 + 4}`,
				courier_name: 'Lalamove',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5 + 5}`,
				courier_name: 'Toktok',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5 + 6}`,
				courier_name: 'J&T Express',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5 + 7}`,
				courier_name: 'LBC Express',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5 + 8}`,
				courier_name: 'Entrego',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				courier_id: uuidv4(),
				courier_no: `COR-${Date.now() * 5 + 9}`,
				courier_name: '2GO',
				created_by: '70ea56c6-407b-4bdf-8cf0-b4e09df50fe8',
				date_created: new Date(),
				date_updated: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('Couriers', null, {});
	},
};
