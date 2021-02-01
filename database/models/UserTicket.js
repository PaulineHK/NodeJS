const DataType = require('sequelize');
const sequelize = require('../sequelize');

const UserTicket = sequelize.define("usersTags", {
	id: {
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	userId: {
		type: DataType.INTEGER,
		allowNull: false,
		unique: true
	},
	ticketId: {
		type: DataType.INTEGER,
		allowNull: false,
		unique: true
	}
}, {
	sequelize,
	modelName: 'usersTickets',
	tableName: 'users_tickets',
	initialAutoIncrement: '1',
});

UserTicket.associate = (model) => {
	UserTicket.belongsTo(model.users, { foreignKey: 'userId' });
	UserTicket.belongsTo(model.tickets, { foreignKey: 'ticketId' });
}
module.exports = UserTicket;