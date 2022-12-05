const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const routes = sequelize.define('route',{
    route_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
      route_name: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      
} );

module.exports = routes;