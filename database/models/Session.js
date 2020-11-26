
module.exports = (sequelize, DataType) => {
    const Session = sequelize.define('sessions', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notNull: true,
                isDate: true,
            }
        },
        movieId: {
            type: DataType.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        timestamps: true,
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_at',
        modelName: 'Session',
        tableName: 'sessions',
    });

    Session.associate = (model) => {
        Session.belongsTo(model.movies, { foreignKey: 'movieId', onDelete: 'RESTRICT' });

    }

    return Session;
}
