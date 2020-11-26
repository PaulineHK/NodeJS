
module.exports = (sequelize, DataType) => {
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
        timestamps: true,
        paranoid: true,
        createdAt: true,
        updatedAt: false,
        modelName: 'Request',
        tableName: 'requests'
    });
    Request.associate = (model) => {
        Request.belongsTo(model.users, { foreignKey: 'userId', onDelete: 'RESTRICT' })
    }
    return Request;
}