const db = require('./sequelize');

module.exports.authenticate = async () => {
	try {
		await db.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

module.exports.sync = async () => {
	try {
		await db.sync({ alter: true });
		console.log("All models were synchronized successfully.");
	} catch (error) {
		console.log('Unable to sync with db: ', error);
	}
}

