const database = require('../config/db');
const restpasswordModel = require('../models/resetpassword');
const catchAsync = require('../utils/catchAsync');

exports.sendEmail = catchAsync(async(req, res, next)=>{
const {user_email,password}=req.body;
const sql=`update user set passwords='${password}'where email='${email}'`
database.query(sql,(err,result)=>{
    if(err){
        console.log(err)}
        res.send({
            message:'successful'
        });
});

});