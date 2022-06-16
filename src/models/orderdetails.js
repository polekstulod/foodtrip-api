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
			// TODO: order_id
			// TODO: dish_id
			quantity: {
				type: DataTypes.INTEGER(10),
				allowNull: false,
				validate: {
					isInt: true,
					notNull: { msg: 'Quantity should not be null.' },
					notEmpty: { msg: 'Quantity should not be empty.' },
				},
			},
			subtotal: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
				validate: {
					isDecimal: true,
					notNull: { msg: 'Subtotal should not be null.' },
					notEmpty: { msg: 'Subtotal should not be empty.' },
				},
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
