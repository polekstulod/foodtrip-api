'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		const restaurants = await queryInterface.sequelize.query(
			`SELECT resto_id FROM restaurants ORDER BY restaurants.resto_no ASC; `
		);
		const restaurantRows = restaurants[0];

		// * Restaurant Address
		return await queryInterface.bulkInsert('Addresses', [
			/*
        ! Palitan yung
        TODO address_1 
        TODO address_2 optional 
        TODO barangay 
        TODO city 
        TODO province 
        TODO region 
        TODO zip_code 
       */
			// * Example
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
				resto_id: restaurantRows[11].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: ' Diliman Commercial Center',
				address_2: null,
				barangay: '46 Commonwealth Ave',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1121',
				is_default: '1',
				resto_id: restaurantRows[12].resto_id,
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
				resto_id: restaurantRows[13].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: '28 Sgt. Esguerra Ave',
				address_2: null,
				barangay: ' Diliman',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '	1101',
				is_default: '1',
				resto_id: restaurantRows[14].resto_id,
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
				resto_id: restaurantRows[15].resto_id,
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
				resto_id: restaurantRows[16].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: 'M32G+H2J',
				address_2: null,
				barangay: 'Diliman',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1101',
				is_default: '1',
				resto_id: restaurantRows[17].resto_id,
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
				resto_id: restaurantRows[18].resto_id,
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
				resto_id: restaurantRows[19].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				address_id: uuidv4(),
				address_1: 'Fairview Centermall,Don Mariano',
				address_2: 'Marcos Ave. cor. Regalado',
				barangay: 'Novaliches',
				city: 'Quezon City',
				province: 'NCR',
				region: 'NCR',
				zip_code: '1118',
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
