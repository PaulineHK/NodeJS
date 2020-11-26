const Sequelize = require('sequelize');

const dbase = require('../config/database.json');

try {
	module.exports = new Sequelize(
		dbase['dev'].database,
		dbase['dev'].user,
		dbase['dev'].password,
		{
			dialect: dbase['dev'].dialect,
			host: dbase['dev'].host,
			logging: dbase['dev'].logging,
			define: {
				timestamps: false
			}
		}
	);
} catch (error) {
	console.log(error);
}
