
export default (sequelize, DataType) => {
    const UserRole = sequelize.define("usersRoles", {
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
        roleId: {
            type: DataType.INTEGER,
            allowNull: false,
            unique: true
        }
    }, {
        sequelize,
        modelName: 'UserRole',
        tableName: 'users_roles',
    });
    return UserRole;
}
