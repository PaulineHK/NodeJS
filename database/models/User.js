const db = require('sequelize.js');
const Sequelize = require("sequelize");

const User = Sequelize.define('users', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	login: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	deletedAt: {
		type: Sequelize.DATE,
		field: 'deleted_at'
	}
});

User.hasOne(Request, { onDelete: "cascade", onUpdate: "restrict" });
User.hasOne(UserRole, { onDelete: "cascade", onUpdate: "restrict" });
User.hasOne(UserTicket, { onDelete: "cascade", onUpdate: "restrict" });