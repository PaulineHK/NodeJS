'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		login: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		deletedAt: 'deleted_at'
	});
	return User;
}
