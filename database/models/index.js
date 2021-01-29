const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const db = {};

db.users = require('./User');
db.tags = require('./Tag')(sequelize, Sequelize);
db.requests = require('./Request')(sequelize, Sequelize);
db.movies = require('./Movie');
db.roles = require('./Role')(sequelize, Sequelize);
db.sessions = require('./Session')(sequelize, Sequelize);
db.tickets = require('./Ticket');
db.moviesTags = require('./MovieTag')(sequelize, Sequelize);
db.usersTickets = require('./UserTicket')(sequelize, Sequelize);
db.usersRoles = require('./UserRole')(sequelize, Sequelize);


module.exports.init = () => {
	Object.keys(db).forEach(function (modelName) {
		if ("associate" in db[modelName]) {
			db[modelName].associate(db);
		}
	});
}
