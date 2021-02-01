const DataType = require('sequelize');
const sequelize = require('../sequelize');


const Role = sequelize.define("roles", {
	id: {
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,

	},
	name: {
		type: DataType.STRING(25),
		allowNull: false,
		unique: true,
		validate: {
			isIn: ['user', 'admin'],
		}
	}
}, {
	sequelize,
	modelName: 'Role',
	tableName: 'roles',
	initialAutoIncrement: '1',
});
Role.associate = (model) => {
	Role.belongsToMany(model.users, { through: model.usersRoles, foreignKey: 'roleId' });
	/*
	Role.belongsToMany(model.endpoints, { through: model.rolesEndpoints, foreignKey: 'roleId' });
*/
}

module.exports = Role;