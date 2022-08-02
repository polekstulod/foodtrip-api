const { v4: uuidv4 } = require('uuid');
('use strict');

module.exports = {
	async up(queryInterface, Sequelize) {
		const restaurants = await queryInterface.sequelize.query(
			`SELECT resto_id FROM restaurants ORDER BY restaurants.resto_no ASC; `
		);
		const restaurantRows = restaurants[0];

		// * Restaurant Address
		return await queryInterface.bulkInsert('Addresses', [
			{
				address_id: uuidv4(),
				address_1: 'Plaza Nova Bldg.',
				address_2: 'Santiago Blvd.',
				barangay: 'Barangay Dadiangas South',
				city: 'General Santos City',
				province: 'South Cotabato',
				region: 'SOCCSKSARGEN',
				zip_code: '9500',
				is_default: '1',
				resto_id: restaurantRows[11].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: ' Edsa Central Pavillion',
				address_2: 'Unite Street corner Edsa',
				barangay: '46 Commonwealth Ave',
				city: 'Mandaluyong City',
				province: 'Metro Manila',
				region: 'NCR',
				zip_code: '	1550',
				is_default: '1',
				resto_id: restaurantRows[12].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '11 Seattle Street ',
				address_2: 'Immaculate Comcepion 1109',
				barangay: 'San Martin de Porres',
				city: 'Quezon City',
				province: 'Metro Manila',
				region: 'NCR',
				zip_code: '	1713',
				is_default: '1',
				resto_id: restaurantRows[13].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '1119-D J P Rizal 1200',
				address_2: null,
				barangay: 'Barangka Ilaya',
				city: 'Makati City',
				province: 'Metro Manila',
				region: 'NCR',
				zip_code: '	1550',
				is_default: '1',
				resto_id: restaurantRows[14].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: 'Domingo Street',
				address_2: 'Cubao',
				barangay: 'San Martin de Porres',
				city: 'Quezon City',
				province: 'Metro Manila',
				region: 'NCR',
				zip_code: '1713',
				is_default: '1',
				resto_id: restaurantRows[15].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '34 East Drive Hts. ',
				address_2: 'Concepcion 1811',
				barangay: 'Marikina Heights',
				city: 'Marikina City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1810',
				is_default: '1',
				resto_id: restaurantRows[16].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '9696 Kamagong Street',
				address_2: 'San Antonio Village',
				barangay: 'Palanan',
				city: 'Makati City',
				province: 'Metro Manila',
				region: 'NCR',
				zip_code: '1235',
				is_default: '1',
				resto_id: restaurantRows[17].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '894 Quezon Boulevard 1000',
				address_2: 'Ermita',
				barangay: 'Brgy. 395',
				city: ' Sampaloc',
				province: 'Manila',
				region: 'NCR',
				zip_code: '1008',
				is_default: '1',
				resto_id: restaurantRows[18].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: 'A. Bonifacio Street',
				address_2: 'Ilaya',
				barangay: 'Lumangbayan',
				city: ' Calapan City',
				province: 'Oriental Mindoro',
				region: '	Mimaropa',
				zip_code: '5208',
				is_default: '1',
				resto_id: restaurantRows[19].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: 'H3J8+6WC, St. Paul College',
				address_2: 'St. Paul St.',
				barangay: 'Caniogan',
				city: 'Pasig City',
				province: 'Metro Manila',
				region: 'NCR',
				zip_code: '1606',
				is_default: '1',
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
