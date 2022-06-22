'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Restaurant extends Model {
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

			this.hasOne(models.User, {
				foreignKey: 'resto_id',
			});

			this.hasOne(models.Address, {
				foreignKey: 'address_id',
			});

			this.belongsTo(models.RestoCategory, {
				as: 'restaurant_category',
				foreignKey: 'restocatg_id',
			});

			this.hasMany(models.OpeningHour, {
				foreignKey: 'resto_id',
			});

			this.hasMany(models.Dish, {
				as: 'restaurant',
				foreignKey: 'resto_id',
			});

			this.hasMany(models.Order, {
				foreignKey: 'resto_id',
			});
		}
	}
	Restaurant.init(
		{
			resto_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			resto_no: {
				type: DataTypes.BIGINT(11),
				allowNull: false,
				unique: { msg: 'Restaurant Number already exists.' },
				validate: {
					notNull: { msg: 'Restaurant Number should not be null.' },
					notEmpty: { msg: 'Restaurant Number should not be empty.' },
				},
			},
			resto_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Restaurant Name should not be null.' },
					notEmpty: { msg: 'Restaurant Name should not be empty.' },
				},
			},
			resto_email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: { msg: 'Email Address entered must be in a valid format.' },
					notNull: { msg: 'Email Address should not be null.' },
					notEmpty: { msg: 'Email Address should not be empty.' },
				},
				unique: { msg: 'Email Address already exists.' },
			},
			resto_phone: {
				type: DataTypes.STRING(13),
				validate: {
					is: {
						args: /^(09|\+639)\d{9}$/,
						msg: 'Please enter a valid phone number.',
					},
				},
				comment:
					'Phone number must start with "09" or "+639" and only up 13 characters',
			},
			resto_landline: {
				type: DataTypes.STRING(8),
				allowNull: false,
				validate: {
					is: {
						args: /^\d{8}$/,
						msg: 'Please enter a valid landline number.',
					},
					notNull: { msg: 'Landline Number should not be null.' },
					notEmpty: { msg: 'Landline Number should not be empty.' },
				},
				comment: 'Landline number should have 8 digits.',
			},
			resto_website: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isURL: {
						msg: "Restaurant's Website must be a URL with https protocol.",
					},
					notNull: { msg: "Restaurant's Website should not be null." },
					notEmpty: { msg: "Restaurant's Website should not be empty." },
				},
			},
			resto_img: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Restaurant Image should not be null.' },
					notEmpty: { msg: 'Restaurant Image should not be empty.' },
				},
				get() {
					const rawValue = this.getDataValue('resto_img');
					return rawValue
						? 'http://localhost:3600/public/restaurants/' + rawValue
						: null;
				},
			},
			restocatg_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.RestoCategory,
					key: 'restocatg_id',
				},
			},
			status: {
				type: DataTypes.STRING,
				defaultValue: 'Open',
				allowNull: false,
				validate: {
					notNull: { msg: 'Status should not be null.' },
					notEmpty: { msg: 'Status should not be empty.' },
					isIn: {
						args: [['Open', 'Closed']],
						msg: 'Status should be Open or Closed only.',
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
			modelName: 'Restaurant',
		}
	);
	return Restaurant;
};
