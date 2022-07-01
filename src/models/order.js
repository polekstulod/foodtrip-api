'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
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

			this.belongsTo(models.Restaurant, {
				foreignKey: 'resto_id',
			});

			this.belongsTo(models.Address, {
				as: 'address',
				foreignKey: 'address_id',
			});

			this.belongsToMany(models.Dish, {
				as: 'dish',
				foreignKey: 'dish_id',
				through: models.OrderDetails,
			});

			this.hasOne(models.Payment, {
				as: 'order',
				foreignKey: 'order_id',
			});

			this.hasOne(models.DeliveryDetails, {
				foreignKey: 'order_id',
			});
		}
	}
	Order.init(
		{
			order_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			order_no: {
				type: DataTypes.BIGINT(11),
				allowNull: false,
				unique: { msg: 'Order Number already exists.' },
				validate: {
					notNull: { msg: 'Order Number should not be null.' },
					notEmpty: { msg: 'Order Number should not be empty.' },
				},
			},
			resto_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Restaurant,
					key: 'resto_id',
				},
			},
			order_status: {
				type: DataTypes.STRING,
				defaultValue: 'In Process',
				allowNull: false,
				validate: {
					notNull: { msg: 'Order Status is required.' },
					notEmpty: { msg: 'Order Status should not be empty.' },
					isIn: {
						args: [['In Process', 'On the Way', 'Delivered', 'Rejected']],
						msg: "Order Status should be 'In Process', 'On the Way', 'Delivered', or 'Rejected' only.",
					},
				},
			},
			order_total: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
				validate: {
					isDecimal: { msg: 'Order Total must be in a valid format.' },
					notNull: { msg: 'Order Total should not be null.' },
					notEmpty: { msg: 'Order Total should not be empty.' },
				},
				comment: 'Sum of the OrderDetails(subtotal) of all rows with the same order_id',
			},
			order_comment: {
				type: DataTypes.TEXT,
				comment: 'Remarks/ Additional Request from customer',
			},
			address_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Address,
					key: 'address_id',
				},
			},
			date_released: {
				type: DataTypes.DATE,
				comment: 'Date and time in which the order/food is released from the restaurant and dispatched to the courier',
			},
			date_rejected: {
				type: DataTypes.DATE,
				comment: 'Date and time in which the order has been rejected',
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
			modelName: 'Order',
		}
	);
	return Order;
};
