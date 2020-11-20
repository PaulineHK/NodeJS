
export default (sequelize, DataType) => {
	const UserTicket = sequelize.define("usersTags", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
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
		modelName: 'UserTicket',
		tableName: 'users_tickets',
	});
	return UserTicket;
}
