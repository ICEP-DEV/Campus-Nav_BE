const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const users = require('./usermodels');

const currentLocation = sequelize.define('currentLocation',{
name:{
    type: Sequelize.STRING,
},
latitude:{
    type: Sequelize.FLOAT(10, 6),
},
logitude:
{
    type: Sequelize.FLOAT(10.6),
},

 

    
});

currentLocation.addScope('d',() =>
{

    const R = 6371;
    const dLat = toRad(lat2-lat1);
    const dLon = toRad(lon2-lon1);
    const lat1 =toRad(lat1);
    const lat2 = toRad(lat2);

    var a = Math.sin(dLat/2)*math.sin(dLat/2)+
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
})
function toRad(value)
{
    return value*Math.PI/100
}
users.hasOne(currentLocation,{onDelete: 'CASCADE',foreignKey:'user_id'})
currentLocation.belongsTo(users)


module.exports = currentLocation;