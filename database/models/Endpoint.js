'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/

module.exports = (sequelize, DataType) => {
    const Endpoint = sequelize.define("endpoints", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        url: {
            type: DataType.STRING(2048),
            allowNull: false,
            unique: true
        }
    });
    return Endpoint;
}
