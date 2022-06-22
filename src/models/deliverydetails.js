'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class DeliveryDetails extends Model {
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

			this.belongsTo(models.Order, {
				foreignKey: 'order_id',
			});

			this.belongsTo(models.Courier, {
				as: 'courier',
				foreignKey: 'courier_id',
			});
		}
	}
	DeliveryDetails.init(
		{
			delivery_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			tracking_no: {
				type: DataTypes.BIGINT(11),
				allowNull: false,
				unique: { msg: 'Tracking Number already exists.' },
				validate: {
					notNull: { msg: 'Tracking Number should not be null.' },
					notEmpty: { msg: 'Tracking Number should not be empty.' },
				},
			},
			order_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Order,
					key: 'order_id',
				},
			},
			courier_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Courier,
					key: 'courier_id',
				},
			},
			driver_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Driver Name should not be null.' },
					notEmpty: { msg: 'Driver Name should not be empty.' },
				},
			},
			driver_phone: {
				type: DataTypes.STRING(13),
				allowNull: false,
				validate: {
					is: {
						args: /^(09|\+639)\d{9}$/,
						msg: 'Please enter a valid phone number.',
					},
					notNull: { msg: "Driver's Phone Number should not be null." },
					notEmpty: { msg: "Driver's Phone Number should not be empty." },
				},
			},
			created_by: {
				type: DataTypes.UUID,
				allowNull: true,
				references: {
					model: sequelize.User,
					key: 'user_id',
				},
			},
			updated_by: {
				type: DataTypes.UUID,
				allowNull: true,
				references: {
					model: sequelize.User,
					key: 'user_id',
				},
			},
			deleted_by: {
				type: DataTypes.UUID,
				allowNull: true,
				references: {
					model: sequelize.User,
					key: 'user_id',
				},
			},
			date_received: {
				type: DataTypes.DATE,
				comment:
					'Date and Time in which the order has been received by the customer.',
			},
		},
		{
			sequelize,
			timestamps: true,
			createdAt: 'date_created',
			updatedAt: 'date_updated',
			deletedAt: 'date_deleted',
			paranoid: true,
			modelName: 'DeliveryDetails',
		}
	);
	return DeliveryDetails;
};
