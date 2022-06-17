'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Address extends Model {
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

			this.belongsTo(models.User, {
				as: 'user',
				foreignKey: 'user_id',
			});

			this.belongsTo(models.Restaurant, {
				as: 'restaurant',
				foreignKey: 'resto_id',
			});

			this.hasMany(models.Order, {
				as: 'adddress',
				foreignKey: 'address_id',
			});
		}
	}
	Address.init(
		{
			address_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			address_1: {
				type: DataTypes.STRING(500),
				allowNull: false,
				validate: {
					notNull: { msg: 'Address Line 1 should not be null' },
					notEmpty: { msg: 'Address Line 1 should not be empty.' },
				},
				comment: 'Room, Floor, Suite or House Number, Street Name',
			},
			address_2: {
				type: DataTypes.STRING(500),
				comment:
					'Building, Dormitory, School or Company Name, Subdivision, Village',
			},
			barangay: {
				type: DataTypes.STRING(50),
				allowNull: false,
				validate: {
					notNull: { msg: 'Barangay should not be null' },
					notEmpty: { msg: 'Barangay should not be empty.' },
				},
			},
			city: {
				type: DataTypes.STRING(50),
				allowNull: false,
				validate: {
					notNull: { msg: 'City should not be null' },
					notEmpty: { msg: 'City should not be empty.' },
				},
			},
			province: {
				type: DataTypes.STRING(50),
				allowNull: false,
				validate: {
					notNull: { msg: 'Province should not be null' },
					notEmpty: { msg: 'Province should not be empty.' },
				},
			},
			region: {
				type: DataTypes.STRING(50),
				allowNull: false,
				validate: {
					notNull: { msg: 'Region should not be null' },
					notEmpty: { msg: 'Region should not be empty.' },
				},
			},
			zip_code: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
				validate: {
					notNull: { msg: 'Zip Code should not be null' },
					notEmpty: { msg: 'Zip Code should not be empty.' },
				},
			},
			user_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.User,
					key: 'user_id',
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
			modelName: 'Address',
		}
	);
	return Address;
};
