'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class RestoCategory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.User, {
				as: 'created',
				foreignKey: 'created_by',
			});

			this.belongsTo(models.User, {
				as: 'updated',
				foreignKey: 'updated_by',
			});

			this.hasMany(models.Restaurant, {
				as: 'restaurant_category',
				foreignKey: 'restocatg_id',
			});
		}
	}

	RestoCategory.init(
		{
			restocatg_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			restocatg_name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: { msg: 'Restaurant Category Name already exists.' },
				validate: {
					notNull: { msg: 'Restaurant Category Name should not be null.' },
					notEmpty: { msg: 'Restaurant Category Name should not be empty.' },
				},
			},
			created_by: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.User,
					key: 'user_id',
				},
			},
			updated_by: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.User,
					key: 'user_id',
				},
			},
		},
		{
			sequelize,
			timestamps: true,
			createdAt: 'date_created',
			updatedAt: 'date_updated',
			modelName: 'RestoCategory',
		}
	);
	return RestoCategory;
};
