'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class OpeningHour extends Model {
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
				foreignKey: 'resto_no',
			});
		}
	}
	OpeningHour.init(
		{
			openhrs_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			resto_no: {
				type: DataTypes.BIGINT(10),
				allowNull: false,
				references: {
					model: sequelize.Restaurant,
					key: 'resto_no',
				},
			},
			day: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isIn: {
						args: [
							[
								'Sunday',
								'Monday',
								'Tuesday',
								'Wednesday',
								'Thursday',
								'Friday',
								'Saturday',
							],
						],
						msg: 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday only',
					},
					notNull: { msg: 'Day should not be null.' },
					notEmpty: { msg: 'Day should not be empty.' },
				},
			},
			open_time: {
				type: DataTypes.TIME,
				allowNull: false,
				validate: {
					notNull: { msg: 'Opening time should not be null.' },
					notEmpty: { msg: 'Opening time should not be empty.' },
				},
			},
			close_time: {
				type: DataTypes.TIME,
				allowNull: false,
				validate: {
					notNull: { msg: 'Closing time should not be null.' },
					notEmpty: { msg: 'Closing time should not be empty.' },
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
		},
		{
			sequelize,
			timestamps: true,
			createdAt: 'date_created',
			updatedAt: 'date_updated',
			deletedAt: 'date_deleted',
			paranoid: true,
			modelName: 'OpeningHour',
		}
	);
	return OpeningHour;
};
