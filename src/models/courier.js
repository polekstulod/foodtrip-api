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
				type: DataTypes.INTEGER(11),
				allowNull: false,
				unique: { msg: 'Courier Number already exists.' },
			},
			courier_name: {
				type: DataTypes.STRING(255),
				allowNull: false,
				validate: {
					notNull: { msg: 'Courier Name should not be null.' },
					notEmpty: { msg: 'Courier Name should not be empty.' },
				},
			},
			courier_status: {
				type: DataTypes.STRING(255),
				defaultValue: 'Available',
				allowNull: false,
				validate: {
					notNull: { msg: 'Status is required.' },
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
		},
		{
			sequelize,
			timestamps: true,
			createdAt: 'date_created',
			updatedAt: 'date_updated',
			modelName: 'Courier',
		}
	);
	return Courier;
};
