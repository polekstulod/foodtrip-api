'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Courier extends Model {
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

			this.hasMany(models.DeliveryDetails, {
				as: 'courier',
				foreignKey: 'courier_id',
			});
		}
	}
	Courier.init(
		{
			courier_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			courier_no: {
				type: DataTypes.STRING(17),
				allowNull: false,
				unique: { msg: 'Courier Number already exists.' },
				validate: {
					notNull: { msg: 'Courier Number should not be null.' },
					notEmpty: { msg: 'Courier Number should not be empty.' },
				},
			},
			courier_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Courier Name should not be null.' },
					notEmpty: { msg: 'Courier Name should not be empty.' },
				},
			},
			courier_status: {
				type: DataTypes.STRING,
				defaultValue: 'Available',
				allowNull: false,
				validate: {
					notNull: { msg: 'Courier status should not be null.' },
					notEmpty: { msg: 'Courier status should not be empty.' },
					isIn: {
						args: [['Available', 'Unavailable']],
						msg: 'Status should be Available or Unavailable only.',
					},
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
			modelName: 'Courier',
		}
	);
	return Courier;
};
