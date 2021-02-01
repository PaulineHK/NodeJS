const DataType = require('sequelize');
const sequelize = require('../sequelize');


const UserRole = sequelize.define("usersRoles", {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataType.INTEGER,
        unique: true
    },
    roleId: {
        type: DataType.INTEGER,
        unique: true
    }
}, {
    sequelize,
    modelName: 'UserRole',
    tableName: 'users_roles',
    initialAutoIncrement: '1',
});
UserRole.associate = (model) => {
    UserRole.belongsTo(model.users, { foreignKey: 'userId' });
    UserRole.belongsTo(model.roles, { foreignKey: 'roleId' });
}
module.exports = UserRole;