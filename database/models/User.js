const DataType = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define('users', {
	id: {
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
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
	lastName: {
		type: DataType.STRING,
		field: 'last_name',
	},
	firstName: {
		type: DataType.STRING,
		field: 'first_name',
	}
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
	initialAutoIncrement: '1',

});
User.associate = (model) => {
	User.hasOne(model.requests, { foreignKey: 'userId', onDelete: 'RESTRICT' });
	User.belongsToMany(model.roles, { through: model.usersRoles, foreignKey: 'userId' });
}

module.exports = User;

