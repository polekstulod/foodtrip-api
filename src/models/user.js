'use strict';
const { Model } = require('sequelize');

const PROTECTED_ATTRIBUTES = ['user_id', 'password'];

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(User, {
				as: 'created',
				foreignKey: 'created_by',
			});

			this.belongsTo(User, {
				as: 'updated',
				foreignKey: 'updated_by',
			});

			this.belongsTo(models.Restaurant, {
				as: 'user_restaurant',
				foreignKey: 'resto_id',
			});
		}

		toJSON() {
			const attributes = { ...this.get() };

			for (const a of PROTECTED_ATTRIBUTES) {
				delete attributes[a];
			}

			return attributes;
		}
	}
	User.init(
		{
			user_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			// TODO: Uncomment when Restaurant model is created
			resto_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Restaurant,
					key: 'resto_id',
				},
			},
			user_no: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: { msg: 'User Number already exists.' },
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'First name should not be null.' },
					notEmpty: { msg: 'First Name should not be empty.' },
				},
			},
			middle_name: {
				type: DataTypes.STRING,
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Last name should not be null.' },
					notEmpty: { msg: 'Last Name should not be empty.' },
				},
			},
			email_address: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: { msg: 'Email Address entered must be in a valid format.' },
					notNull: { msg: 'Email Address is required.' },
				},
				unique: { msg: 'Email Address already exists.' },
			},
			phone_number: {
				type: DataTypes.STRING(13),
				allowNull: false,
				validate: {
					is: {
						args: /^(09|\+639)\d{9}$/,
						msg: 'Please enter a valid phone number.',
					},
				},
			},
			gender: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isIn: {
						args: [['Male', 'Female', 'Others']],
						msg: 'Gender should be male, female or others only.',
					},
				},
			},
			user_type: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: 'Customer',
				validate: {
					notNull: { msg: 'User type is required.' },
					isIn: {
						args: [['Customer', 'Resto_Admin', 'Admin']],
						msg: 'User type should be Customer, Resto_Admin or Admin only.',
					},
				},
			},
			status: {
				type: DataTypes.STRING,
				defaultValue: 'Active',
				allowNull: false,
				validate: {
					notNull: { msg: 'Status is required.' },
					isIn: {
						args: [['Active', 'Inactive']],
						msg: 'Status should be Active or Inactive only.',
					},
				},
			},
			created_by: {
				type: DataTypes.UUID,
				references: {
					model: User,
					key: 'user_id',
				},
			},
			updated_by: {
				type: DataTypes.UUID,
				references: {
					model: User,
					key: 'user_id',
				},
			},
		},
		{
			sequelize,
			timestamps: true,
			createdAt: 'date_created',
			updatedAt: 'date_updated',
			modelName: 'User',
		}
	);
	return User;
};
