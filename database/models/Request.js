
export default (sequelize, DataType) => {
    const Request = sequelize.define('requests', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            type: DataType.INTEGER,
            allowNull: false,
            field: 'user_id'
        }
    }, {
        sequelize,
        paranoid: true,
        createdAt: true,
        deletedAt: 'deleted_date',
        modelName: 'Request',
        tableName: 'requests'
    });
    return Request;
}