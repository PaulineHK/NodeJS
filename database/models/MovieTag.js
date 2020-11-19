'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/

module.exports = (sequelize, DataType) => {
	const MovieTag = sequelize.define("moviesTags", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		movieId: {
			type: DataType.INT,
			allowNull: false,
			unique: true
		},
		tagId: {
			type: DataType.INT,
			allowNull: false,
			unique: true
		}
	});
	const MovieTag;
}
