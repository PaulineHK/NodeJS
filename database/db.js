import { Sequelize, sequelize } from './sequelize.js';

import mUser from './models/User.js';
import mTag from './models/Tag.js';
import mRequest from './models/Request.js';
import mMovie from './models/Movie.js';
import mMovieTag from './models/MovieTag.js';
import mEndpoint from './models/Endpoint.js';
import mRoleEndpoint from './models/RoleEndpoint.js';
import mSession from './models/Session.js';
import mState from './models/State.js';
import mTicket from './models/Ticket.js';
import mUserTicket from './models/UserTicket.js';
import mUserRole from './models/UserRole.js';
import mRole from './models/Role.js';

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = mUser(db.sequelize, db.Sequelize);
db.tags = mTag(db.sequelize, db.Sequelize);
db.requests = mRequest(db.sequelize, db.Sequelize);;
db.movies = mMovie(db.sequelize, db.Sequelize);
db.moviesTags = mMovieTag(db.sequelize, db.Sequelize);
db.endpoints = mEndpoint(db.sequelize, db.Sequelize);
db.roles = mRole(db.sequelize, db.Sequelize);
db.rolesEndpoints = mRoleEndpoint(db.sequelize, db.Sequelize);
db.sessions = mSession(db.sequelize, db.Sequelize);
db.states = mState(db.sequelize, db.Sequelize);
db.tickets = mTicket(db.sequelize, db.Sequelize);
db.usersTickets = mUserTicket(db.sequelize, db.Sequelize);
db.usersRoles = mUserRole(db.sequelize, db.Sequelize);

db.users.hasOne(db.requests, { as: 'user', foreignKey: 'user_id', onDelete: "restrict" });

db.sessions.hasMany(db.movies, { as: 'session', foreignKey: 'session_id', onDelete: 'restrict' });
db.movies.belongsTo(db.sessions, { as: 'session', foreignKey: 'session_id', onDelete: 'restrict' });

db.states.hasMany(db.tickets, { as: 'state', foreignKey: 'state_id', onDelete: 'restrict' });
db.tickets.belongsTo(db.states, { as: 'state', foreignKey: 'state_id', onDelete: 'restrict' });

db.users.belongsToMany(db.roles, { as: 'role', through: db.usersRoles, foreignKey: 'role_id' });
db.roles.belongsToMany(db.users, { as: 'user', through: db.usersRoles, foreignKey: 'user_id' });

db.roles.belongsToMany(db.endpoints, { as: 'endpoint', through: db.rolesEndpoints, foreignKey: 'endpoint_id' });
db.endpoints.belongsToMany(db.roles, { as: 'role', through: db.rolesEndpoints, foreignKey: 'role_id' });

db.users.belongsToMany(db.tickets, { as: 'ticket', through: db.usersTickets, foreignKey: 'ticket_id' });
db.tickets.belongsToMany(db.users, { as: 'user', through: db.usersTickets, foreignKey: 'user_id' });

db.movies.belongsToMany(db.tags, { as: 'tag', through: db.moviesTags, foreignKey: 'tag_id' });
db.tags.belongsToMany(db.movies, { as: 'movie', through: db.moviesTags, foreignKey: 'movie_id' });


export default db;