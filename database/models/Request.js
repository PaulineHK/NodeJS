'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/

module.exports = (sequelize, DataType) => {
    const Request = sequelize.define('requests', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date: {
            type: DataType.DATE,
            allowNull: true
        },
        createdAt: 'created_at'
    });
    return Request;
}