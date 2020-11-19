'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/
module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('tickets', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        seat: {
            type: DataTypes.INT,
            unique: true,
            allowNull: false,
            unique: true
        },
        row: {
            type: DataTypes.INT,
            allowNull: false,
            unique: true
        },
        price: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false
        },
        deletedAt: 'deleted_at'
    });
    return Ticket;
}
