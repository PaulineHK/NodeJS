'use strict'
/*
const db = require('sequelize.js');
const Sequelize = require("sequelize");
*/

module.exports = (sequelize, DataType) => {
    const UserRole = sequelize.define("usersRoles", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
    });
    return UserRole;
}
