'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/
module.exports = (sequelize, DataType) => {
	const Tag = sequelize.define("tags", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataType.STRING(15),
			allowNull: false,
			unique: true
		}
	});
	return Tag;
}