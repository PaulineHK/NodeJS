const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const db = {};

db.users = require('./User')(sequelize, Sequelize);
db.tags = require('./Tag')(sequelize, Sequelize);
db.requests = require('./Request')(sequelize, Sequelize);;
db.movies = require('./Movie')(sequelize, Sequelize);
db.moviesTags = require('./MovieTag')(sequelize, Sequelize);
db.endpoints = require('./Endpoint')(sequelize, Sequelize);
db.roles = require('./Role')(sequelize, Sequelize);
db.rolesEndpoints = require('./RoleEndpoint')(sequelize, Sequelize);
db.sessions = require('./Session')(sequelize, Sequelize);
db.tickets = require('./Ticket')(sequelize, Sequelize);
db.usersTickets = require('./UserTicket')(sequelize, Sequelize);
db.usersRoles = require('./UserRole')(sequelize, Sequelize);

module.exports.modelInit = () => {
	Object.keys(db).forEach(function (modelName) {
		if ("associate" in db[modelName]) {
			db[modelName].associate(db);
		}
	});
}