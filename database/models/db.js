const db = require('./sequelize');


db.users = require('./User')(sequelize, Sequelize);
db.tags = require('./Tag')(sequelize, Sequelize);
db.requests = require('./Request')(sequelize, Sequelize);
db.roles = require('./Role')(sequelize, Sequelize);
db.movies = require('./Movie')(sequelize, Sequelize);
db.moviesTags = require('./MovieTag')(sequelize, Sequelize);
db.endpoints = require('./Endpoint')(sequelize, Sequelize);;
db.rolesEndpoints = require('./RoleEndpoint')(sequelize, Sequelize);
db.sessions = require('./Session')(sequelize, Sequelize);
db.states = require('./State')(sequelize, Sequelize);
db.tickets = require('./Ticket')(sequelize, Sequelize);
db.usersRoles = require('./UserRole')(sequelize, Sequelize);
db.usersTickets = require('./UserTicket')(sequelize, Sequelize);

db.requests.hasMany(db.users);
db.users.belongsTo(db.requests);


module.exports = db;