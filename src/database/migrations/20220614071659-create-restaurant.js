'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resto_no: {
        type: Sequelize.INTEGER
      },
      resto_name: {
        type: Sequelize.STRING
      },
      resto_email: {
        type: Sequelize.STRING
      },
      resto_phone: {
        type: Sequelize.STRING
      },
      resto_landline: {
        type: Sequelize.STRING
      },
      resto_website: {
        type: Sequelize.STRING
      },
      resto_img: {
        type: Sequelize.STRING
      },
      restocatg_id: {
        type: Sequelize.UUID
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restaurants');
  }
};