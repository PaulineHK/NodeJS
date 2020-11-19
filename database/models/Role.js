const db = require('sequelize.js');
const Sequelize = require("sequelize");

const Role = db.define("roles", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING(25),
		allowNull: false,
		unique: true
	}
});

Role.belongsToMany(MovieTag, { through: "MovieTag" });