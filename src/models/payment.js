'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Payment extends Model {
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
				as: 'order',
				foreignKey: 'order_id',
			});
		}
	}
	Payment.init(
		{
			payment_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			payment_no: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				unique: { msg: 'Payment Number already exists.' },
				validate: {
					notNull: { msg: 'Payment Number should not be null.' },
					notEmpty: { msg: 'Payment Number should not be empty.' },
				},
			},
			order_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Order,
					key: 'order_id',
				},
			},
			payment_status: {
				type: DataTypes.STRING,
				defaultValue: 'Paid',
				allowNull: false,
				validate: {
					notNull: { msg: 'Payment Status is required.' },
					notEmpty: { msg: 'Payment Status should not be empty.' },
					isIn: {
						args: [['Paid', 'Refunded']],
						msg: "Payment Status should be 'Paid' or 'Refunded' only.",
					},
				},
			},
			payment_total: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
				validate: {
					isDecimal: { msg: 'Payment Total must be in a valid format.' },
					notNull: { msg: 'Payment Total should not be null.' },
					notEmpty: { msg: 'Payment Total should not be empty.' },
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
			paranoid: true,
			createdAt: 'date_created',
			updatedAt: 'date_updated',
			deletedAt: 'date_deleted',
			modelName: 'Payment',
		}
	);
	return Payment;
};
