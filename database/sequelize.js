import Sequelize from "sequelize";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const dbase = require('../config/database.json');

const sequelize = new Sequelize(
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

export { Sequelize, sequelize };
