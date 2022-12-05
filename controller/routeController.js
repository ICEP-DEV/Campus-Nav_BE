//CRUD - Create, Read, Update Delete
const routeModel = require('../models/routemodel');
const catchAsync = require('../utils/catchAsync');

//CREATE USER
exports.createRoute = catchAsync(async(req, res, next)=>{
    const campusRoute = await routeModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "route Successfully added",
        campusRoute
    })
});


exports.getRoute = catchAsync(async(req, res, next)=>{
    const campusRoute  = await routeModel.findAll()
});