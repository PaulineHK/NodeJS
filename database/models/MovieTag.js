const db = require('sequelize.js');
const Sequelize = require("sequelize");

const MovieTag = db.define("movieTag", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	movieId: {
		type: Sequelize.INT,
		allowNull: false,
		unique: true
	},
	tagId: {
		type: Sequelize.INT,
		allowNull: false,
		unique: true
	}
});
