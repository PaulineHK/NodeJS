
export default (sequelize, DataType) => {
    const Session = sequelize.define('sessions', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date: {
            type: DataType.DATE,
            allowNull: false
        },
        movieId: {
            type: DataType.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        paranoid: true,
        deletedAt: 'deleted_at',
        modelName: 'Session',
        tableName: 'sessions',
    });
    return Session;
}
