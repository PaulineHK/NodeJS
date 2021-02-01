const DataType = require('sequelize');
const sequelize = require('../sequelize');

const Request = sequelize.define('requests', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    tableName: 'requests',
    initialAutoIncrement: '1',
});
Request.associate = (model) => {
    Request.belongsTo(model.users, { foreignKey: 'userId', onDelete: 'RESTRICT' })
}

module.exports = Request;