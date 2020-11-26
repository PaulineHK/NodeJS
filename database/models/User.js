
module.exports = (sequelize, DataType) => {
	const User = sequelize.define('users', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		login: {
			type: DataType.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: true,
				isEmail: true,
				notNull: true,
				equals: 'specific value',
			}
		},
		password: {
			type: DataType.STRING,
			allowNull: false
		},
		//timestamps: false
		//deletedAt: true
	}, {
		sequelize,
		timestamps: true,
		paranoid: true,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_at',
		modelName: 'User',
		tableName: 'users',

	});
	User.associate = (model) => {
		User.hasOne(model.requests, { foreignKey: 'userId', onDelete: 'RESTRICT' });
		User.belongsToMany(model.roles, { through: model.usersRoles, foreignKey: 'userId' });
		User.belongsToMany(model.tickets, { through: model.usersTickets, foreignKey: 'userId' });
	}
	return User;
}
