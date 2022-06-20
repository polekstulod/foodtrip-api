'use strict';
const { Model } = require('sequelize');
const orderdetails = require('./orderdetails');
module.exports = (sequelize, DataTypes) => {
	class Dish extends Model {
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

			this.belongsTo(models.User, {
				as: 'deleted',
				foreignKey: 'deleted_by',
			});

			this.belongsTo(models.DishCategory, {
				as: 'dish_category',
				foreignKey: 'dishcatg_id',
			});

			this.belongsTo(models.Restaurant, {
				as: 'restaurant',
				foreignKey: 'resto_id',
			});
			this.belongsToMany(models.Order, {
				as: 'order',
				foreignKey: 'order_id',
				through: models.OrderDetails,
			});
		}
	}
	Dish.init(
		{
			dish_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			dish_no: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				unique: { msg: 'Dish Number already exists.' },
				validate: {
					notNull: { msg: 'Dish Number should not be null.' },
					notEmpty: { msg: 'Dish Number should not be empty.' },
				},
			},
			dish_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Dish Name should not be null.' },
					notEmpty: { msg: 'Dish Name should not be empty.' },
				},
			},
			dish_desc: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notNull: { msg: 'Dish Description should not be null.' },
					notEmpty: { msg: 'Dish Description should not be empty.' },
				},
			},
			dish_price: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
				validate: {
					isDecimal: { msg: 'Price entered must be in a valid format.' },
					notNull: { msg: 'Dish Price should not be null.' },
					notEmpty: { msg: 'Dish Price should not be empty.' },
				},
			},
			dish_img: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Dish Image should not be null.' },
					notEmpty: { msg: 'Dish Image should not be empty.' },
				},
				get() {
					const rawValue = this.getDataValue('dish_img');
					return rawValue
						? 'http://localhost:3600/public/dishes/' + rawValue
						: null;
				},
			},
			status: {
				type: DataTypes.STRING,
				defaultValue: 'Available',
				allowNull: false,
				validate: {
					notNull: { msg: 'Status should not be null.' },
					notEmpty: { msg: 'Status should not be empty.' },
					isIn: {
						args: [['Available', 'Unavailable']],
						msg: 'Status should be Available or Unavailable only.',
					},
				},
			},
			dishcatg_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.DishCategory,
					key: 'dishcatg_id',
				},
			},
			resto_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Restaurant,
					key: 'resto_id',
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
			deleted_by: {
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
			deletedAt: 'date_deleted',
			paranoid: true,
			modelName: 'Dish',
		}
	);
	return Dish;
};
