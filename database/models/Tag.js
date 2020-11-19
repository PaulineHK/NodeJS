const db = require('sequelize.js');
const Sequelize = require("sequelize");

const Tag = db.define("tags", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING(15),
		allowNull: false,
		unique: true
	}
});

Tag.belongsToMany(MovieTag, { onDelete: "cascade", onUpdate: "restrict" });