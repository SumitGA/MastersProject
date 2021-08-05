'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Username'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Email'
      },
      hashedPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'HashedPassword'
      },
      role: {
        type: DataTypes.ENUM('normal', 'admin', 'manager'),
        allowNull: false,
        defaultValue: 'normal',
        field: 'Role'
      }
		},
		{
			sequelize,
			modelName: 'User',
      timestamps: true
		}
	);
	return User;
};
