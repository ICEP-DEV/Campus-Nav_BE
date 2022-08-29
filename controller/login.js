//CRUD - Create, Read, Update Delete
const loginModel = require('../models/loginmodels');
const catchAsync = require('../utils/catchAsync');

//CREATE USER
exports.createLogin = catchAsync(async(req, res, next)=>{
    const login = await loginModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "logined Successfully",
        login
    })
});


exports.getlogin = catchAsync(async(req, res, next)=>{
    const login  = await loginModel.findAll()
});