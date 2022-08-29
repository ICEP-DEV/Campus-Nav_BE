const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const login = sequelize.define('login',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      }
} );

module.exports = login;