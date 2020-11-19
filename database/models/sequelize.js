const Sequelize = require("sequelize");
const database = require('../../config/database.json');

const sequelize = new Secuelize(
	database.dev.database,
	database.dev.user,
	database.dev.password,
	{
		dialect: database.dev.dialect,
		host: database.dev.host,
		logging: database.dev.logging
	}
);
const db = {};
db.Secuelize = Sequelize;
db.sequelize = sequelize;



module.exports = db;