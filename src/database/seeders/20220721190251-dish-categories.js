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
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000001.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000002.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000003.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000004.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000005.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000006.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000007.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000008.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000009.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000010.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[1].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000011.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000012.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000013.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000014.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000015.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000016.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000017.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000018.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-000000000019.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000020.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[2].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000021.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000022.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000023.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000024.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000025.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000026.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000027.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000028.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000029.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000030.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[3].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000031.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000032.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000033.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000034.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000035.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000036.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000037.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000038.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000039.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000040.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[4].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000041.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000042.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000043.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000044.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000045.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000046.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000047.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000048.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000049.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000050.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[5].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000051.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000052.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000053.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000054.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000055.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000056.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000057.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000058.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000059.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000060.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[6].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},

			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000061.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000062.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000063.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000064.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000065.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000066.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000067.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000068.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000069.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000070.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[7].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000071.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000072.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000073.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000074.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000075.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000076.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000077.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000078.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000079.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000080.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[8].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000081.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000082.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000083.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000084.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000085.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000086.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000087.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000088.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000089.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000090.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[9].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000091.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000092.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000093.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000094.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000095.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000096.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000097.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000098.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-0000000000099.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
				date_created: new Date(), // ! wag gagalawin
				date_updated: new Date(), // ! wag gagalawin
			},
			{
				dish_id: uuidv4(), // ! wag gagalawin
				dish_no: `DSH-${Math.floor(Date.now() * 2.5)}`, // ! wag gagalawin
				dish_name: '',
				dish_desc: '',
				dish_price: '', // ! two decimal places
				dish_img: 'dish_img-00000000000100.png', // ! wag gagalawin
				status: 'Open', // ! wag gagalawin
				dishcatg_id: dishCatRows[1].dishcatg_id, // ! palitan yung '1' depends kung pang ilan yung dish category na yun
				resto_id: restaurantRows[10].resto_id, // ! wag gagalawin
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
