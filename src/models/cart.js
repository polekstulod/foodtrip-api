'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Cart extends Model {
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

			this.belongsTo(models.Restaurant, {
				foreignKey: 'resto_id',
			});

			this.belongsToMany(models.Dish, {
				as: 'dish',
				foreignKey: 'dish_id',
				through: models.CartDetail,
			});
		}
	}
	Cart.init(
		{
			cart_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			resto_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Restaurant,
					key: 'resto_id',
				},
			},
			cart_total: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
				validate: {
					isDecimal: { msg: 'Cart Total must be in a valid format.' },
					notNull: { msg: 'Cart Total should not be null.' },
					notEmpty: { msg: 'Cart Total should not be empty.' },
				},
				comment: 'Sum of the CartDetails(subtotal) of all rows with the same order_id',
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
			modelName: 'Cart',
		}
	);
	return Cart;
};
