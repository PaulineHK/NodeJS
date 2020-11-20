

export default (sequelize, DataType) => {
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
            unique: true
        }
    }, {
        sequelize,
        modelName: 'Endpoint',
        tableName: 'endpoints'

    });
    return Endpoint;
}
