const locationModel = require('../models/curentlocation.Model');
const catchAsync = require('../utils/catchAsync');
const User = require( "../models/usermodels");


//CREATE USER
exports.createLocation = catchAsync(async(req, res, next)=>{
    const locationRoute = await locationModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "added ",
        locationRoute
    })
});


exports.getLocation = catchAsync(async(req, res, next)=>{
    const  locationRoute  = await locationModel.findAll()
});









































/*exports.getDistanceInKm(latitutude1,latitutude2,longitude1,longitude2)
{
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(latitutude2-latitutude1); // deg2rad below
    var dLon = deg2rad(longitude2-longitude1);   
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}*/


