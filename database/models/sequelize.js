const Sequelize = require("sequelize");
const db = require('../../config/database.json');

const sequelize = new Secuelize(
	db.dev.database,
	db.dev.user,
	db.dev.password,
	{
		dialect: db.dev.dialect,
		host: db.dev.host,
		logging: db.dev.logging
	}
);

module.exports.db = db;