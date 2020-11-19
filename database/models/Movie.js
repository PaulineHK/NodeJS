'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('movies', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        year: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deletedAt: 'deleted_at'
    });
    return Movie;
}
