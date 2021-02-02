const DataType = require('sequelize');
const sequelize = require('../sequelize');

const Ticket = sequelize.define('tickets', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    seat: {
        type: DataType.INTEGER,
        // unique: true,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
            isNumeric: true,
            min: 1
        }
    },
    row: {
        type: DataType.INTEGER,
        allowNull: false,
        // unique: true,
        validate: {
            notNull: true,
            isNumeric: true,
            min: 1,
        }
    },
    price: {
        type: DataType.DECIMAL(6, 2),
        allowNull: false,
        defaultValue: 5.00,
        validate: {
            notNull: true,
            isDecimal: true,
        }
    },
    sessionId: {
        type: DataType.INTEGER,
        allowNull: false,
        // unique: true,
        field: 'session_id',
    },
    userId: {
        type: DataType.INTEGER,
        allowNull: false,
        field: 'user_id',
    }
}, {
    sequelize,
    timestamps: true,
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_at',
    modelName: 'Ticket',
    tableName: 'tickets',
    initialAutoIncrement: '1',
    // indexes: [{ unique: true, fields: ['seat', 'row', 'session_id'] }],
});
Ticket.associate = (model) => {
    Ticket.belongsTo(model.users, { as: 'user', foreignKey: 'userId', onDelete: 'RESTRICT' });
    Ticket.belongsTo(model.sessions, { as: 'session', foreignKey: 'sessionId', onDelete: 'RESTRICT' });
}

module.exports = Ticket;