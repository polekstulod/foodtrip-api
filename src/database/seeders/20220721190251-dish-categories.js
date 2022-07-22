'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
	async up(queryInterface, Sequelize) {
		// * Dish Categories
		await queryInterface.bulkInsert('DishCategories', [
			// * Example
			{
				dishcatg_id: uuidv4(),
				dishcatg_name: 'Breakfast',
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				dishcatg_id: uuidv4(), // ! wag gagalawin
				dishcatg_name: '',
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
		]);

		const dishCat = await queryInterface.sequelize.query(`SELECT dishcatg_id from DishCategories;`);
		const dishCatRows = dishCat[0];

		const restaurants = await queryInterface.sequelize.query(`SELECT resto_id from Restaurants;`);
		const restaurantRows = restaurants[0];

		// * Dishes
		return await queryInterface.bulkInsert('Dishes', [
			// * Example
			{
				dish_id: uuidv4(),
				dish_no: '49210789113',
				dish_name: 'Jollibee Chicken Sandwich',
				dish_desc:
					'Our Original Chicken Sandwich starts with a crispy juicy hand-breaded chicken breast fillet, spread with umami mayo and served on a toasted brioche bun',
				dish_price: '200.00',
				dish_img: 'dish_img-000000000000.png',
				status: 'Open',
				dishcatg_id: dishCatRows[0].dishcatg_id,
				resto_id: restaurantRows[0].resto_id,
				date_created: new Date(),
				date_updated: new Date(),
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: '', // ! 11 digits only (random numbers)
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000001.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! wag gagalawin
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
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
