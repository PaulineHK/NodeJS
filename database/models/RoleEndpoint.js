'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/

module.exports = (sequelize, DataType) => {
    const RoleEndpoint = sequelize.define("rolesEndpoints", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
    });
    return RoleEndpoint;
}
