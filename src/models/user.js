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

			this.belongsTo(User, {
				as: 'deleted',
				foreignKey: 'deleted_by',
			});

			this.hasMany(models.Address, {
				as: 'user',
				foreignKey: 'user_id',
			});

			this.belongsTo(models.Restaurant, {
				as: 'restaurant',
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
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			resto_id: {
				type: DataTypes.UUID,
				references: {
					model: sequelize.Restaurant,
					key: 'resto_id',
				},
			},
			user_no: {
				type: DataTypes.BIGINT(11),
				allowNull: false,
				unique: { msg: 'User Number already exists.' },
				validate: {
					notNull: { msg: 'User Number should not be null.' },
					notEmpty: { msg: 'User Number should not be empty.' },
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Password should not be null.' },
					notEmpty: { msg: 'Password should not be empty.' },
				},
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
					notNull: { msg: 'Email Address should not be null.' },
					notEmpty: { msg: 'Email Address should not be empty.' },
				},
				unique: { msg: 'Email Address already exists.' },
			},
			phone_number: {
				type: DataTypes.STRING(13),
				validate: {
					is: {
						args: /^(09|\+639)\d{9}$/,
						msg: 'Please enter a valid phone number.',
					},
				},
				comment: 'Phone number must start with "09" or "+639" and only up 13 characters',
			},
			gender: {
				type: DataTypes.STRING,
				validate: {
					isIn: {
						args: [['Male', 'Female', 'Others']],
						msg: 'Gender should be Male, Female or Others only.',
					},
				},
			},
			user_type: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: 'Customer',
				validate: {
					isIn: {
						args: [['Customer', 'Resto_Admin', 'Admin']],
						msg: 'User type should be Customer, Resto_Admin or Admin only.',
					},
					notNull: { msg: 'User Type should not be null.' },
					notEmpty: { msg: 'User Type should not be empty.' },
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
			deleted_by: {
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
			deletedAt: 'date_deleted',
			paranoid: true,
			modelName: 'User',
		}
	);
	return User;
};
