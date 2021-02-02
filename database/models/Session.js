const DataType = require('sequelize');
const sequelize = require('../sequelize');


const Session = sequelize.define('sessions', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    date: {
        type: DataType.DATE,
        allowNull: false,
        unique: 'unique',
        validate: {
            notNull: true,
            isDate: true,
        }
    },
    movieId: {
        type: DataType.INTEGER,
        allowNull: false,
        unique: 'unique',
        field: 'movie_id'
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
    initialAutoIncrement: '1',
});

Session.associate = (model) => {
    Session.belongsTo(model.movies, { as: 'movie', foreignKey: 'movieId', onDelete: 'RESTRICT' });
    Session.hasMany(model.tickets, { foreignKey: 'sessionId', onDelete: 'RESTRICT' });
}
module.exports = Session;