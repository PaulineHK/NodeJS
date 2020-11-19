'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/
module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('sessions', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: 'deleted_at'
    });
    return Session;
}
