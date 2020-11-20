
export default (sequelize, DataType) => {
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
            unique: true
        },
        row: {
            type: DataType.INTEGER,
            allowNull: false,
            unique: true
        },
        price: {
            type: DataType.DECIMAL(6, 2),
            allowNull: false
        },
        sessionId: {
            type: DataType.INTEGER,
            allowNull: false,
            unique: true
        }
    }, {
        sequelize,
        paranoid: true,
        deletedAt: 'deleted_at',
        modelName: 'Ticket',
        tableName: 'tickets',
    });
    return Ticket;
}
