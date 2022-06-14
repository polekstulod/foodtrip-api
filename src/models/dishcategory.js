'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class DishCategory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Restaurant, {
				as: 'dish_restaurant_category',
				foreignKey: 'resto_id',
			});
		}
	}
	DishCategory.init(
		{
			dishcatg_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			dishcatg_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Dish Category Name should not be null.' },
					notEmpty: { msg: 'Dish Category Name should not be empty.' },
				},
				unique: { msg: 'Dish Category Name already exists.' },
			},
			resto_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Restaurant,
					key: 'resto_id',
				},
			},
			created_by: {
				type: DataTypes.STRING,
				references: {
					model: sequelize.users,
					key: 'user_id',
				},
			},
			updated_by: {
				type: DataTypes.STRING,
				references: {
					model: sequelize.users,
					key: 'user_id',
				},
			},
		},
		{
			sequelize,
			timestamps: true,
			createdAt: 'date_created',
			updatedAt: 'date_updated',
			modelName: 'DishCategory',
		}
	);
	return DishCategory;
};
