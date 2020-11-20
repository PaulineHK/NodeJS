
export default (sequelize, DataType) => {
    const RoleEndpoint = sequelize.define("rolesEndpoints", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        roleId: {
            type: DataType.INTEGER,
            allowNull: false,
            field: 'role_id'
        },
        endpointId: {
            type: DataType.INTEGER,
            allowNull: false,
            field: 'endpoint_id'
        }
    }, {
        sequelize,
        modelName: 'RoleEndpoint',
        tableName: 'roles_endpoints',
    });
    return RoleEndpoint;
}
