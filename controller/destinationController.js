//CRUD - Create, Read, Update Delete
const destinationModel = require('../models/destinationModel');
const catchAsync = require('../utils/catchAsync');


//CREATE USER
exports.createDestination = catchAsync(async(req, res, next)=>{
    const destinationRoute = await destinationModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "Destination Successfully added",
        destinationRoute
    })
});


exports.getDestination = catchAsync(async(req, res, next)=>{
    const destinationRoute  = await destinationModel.findAll()
});