const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const destination = sequelize.define('destination',{
    destination_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique:true,
    },
      destination_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination_latitude: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination_longitude: {
        type: Sequelize.STRING,
        allowNull: false,
      }

} );

module.exports = destination;