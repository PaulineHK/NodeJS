'use strict'

export default (sequelize, DataType) => {
    const Movie = sequelize.define('movies', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        time: {
            type: DataType.INTEGER,
            allowNull: false
        },
        age: {
            type: DataType.STRING(5),
            allowNull: false
        },
        year: {
            type: DataType.DATEONLY,
            allowNull: false
        },
        description: {
            type: DataType.TEXT,
            allowNull: true
        },
        poster: {
            type: DataType.STRING,
            allowNull: true
        },

    }, {
        sequelize,
        paranoid: true,
        deletedAt: 'deleted_at',
        modelName: 'Movie',
        tableName: 'movies'
    });
    return Movie;
}
