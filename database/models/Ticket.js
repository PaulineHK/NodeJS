
module.exports = (sequelize, DataType) => {
    const Ticket = sequelize.define('tickets', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        seat: {
            type: DataType.INTEGER,
            unique: true,
            allowNull: false,
            unique: true,
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
            unique: true,
            validate: {
                notNull: true,
                isNumeric: true,
                min: 1,
            }
        },
        price: {
            type: DataType.DECIMAL(6, 2),
            allowNull: false,
            validate: {
                notNull: true,
                isDecimal: true,
            }
        },
        sessionId: {
            type: DataType.INTEGER,
            allowNull: false,
            unique: true
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
    });
    Ticket.associate = (model) => {
        Ticket.belongsToMany(model.users, { through: model.usersTickets, foreignKey: 'ticketId' });

    }
    return Ticket;
}
