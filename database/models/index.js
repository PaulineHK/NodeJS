const db = {};

db.users = require('./User');
db.tags = require('./Tag');
db.requests = require('./Request');
db.movies = require('./Movie');
db.roles = require('./Role');
db.sessions = require('./Session');
db.tickets = require('./Ticket');
db.moviesTags = require('./MovieTag');
db.usersRoles = require('./UserRole');

module.exports.init = () => {
	Object.keys(db).forEach(function (modelName) {
		if ("associate" in db[modelName]) {
			db[modelName].associate(db);
		}
	});
}
