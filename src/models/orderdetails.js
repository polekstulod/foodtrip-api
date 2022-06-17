'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class OrderDetails extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	OrderDetails.init(
		{
			orddetail_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			quantity: {
				type: DataTypes.INTEGER(10),
				allowNull: false,
				validate: {
					isInt: { msg: 'Quantity entered must be a valid integer.' },
					notNull: { msg: 'Quantity should not be null.' },
					notEmpty: { msg: 'Quantity should not be empty.' },
				},
			},
			subtotal: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
				validate: {
					isDecimal: { msg: 'Subtotal should be in a valid format.' },
					notNull: { msg: 'Subtotal should not be null.' },
					notEmpty: { msg: 'Subtotal should not be empty.' },
				},
				comment: 'Dish(dish_price) * OrderDetails(quantity)',
			},
		},
		{
			sequelize,
			modelName: 'OrderDetails',
			timestamps: false,
		}
	);
	return OrderDetails;
};
