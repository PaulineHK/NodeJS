
module.exports = (sequelize, DataType) => {
    const Endpoint = sequelize.define("endpoints", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        url: {
            type: DataType.STRING(2048),
            allowNull: false,
            unique: true,
            validate: {
                isUrl: true,
                notNull: true,
            }
        }
    }, {
        sequelize,
        modelName: 'Endpoint',
        tableName: 'endpoints'

    });
    Endpoint.associate = (model) => {
        Endpoint.belongsToMany(model.roles, { through: model.rolesEndpoints, foreignKey: 'endpointId' });
    }
    return Endpoint;
}
