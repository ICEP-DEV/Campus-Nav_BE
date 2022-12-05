//CRUD - Create, Read, Update Delete
const UserModel = require('../models/usermodels');
const catchAsync = require('../utils/catchAsync');


//CREATE USER

exports.createUser = catchAsync(async(req, res, next)=>{
    let data =
    {

        user_id: req.body.user_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        user_type: req.body.user_type,
        user_email: req.body.user_email,
        password: req.body.password,
        // confirm_password: req.body.confirm_password,
    
    }
    console.log(data)    
    const user = await UserModel.create(data);

    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "User Created Successfully",
        user
    })
});


exports.getUser = catchAsync(async(req, res, next)=>{
    const user  = await UserModel.findAll()
    if(!user){
        return next(new Error('Users not found!'))
    }
    else
     return res.send(user);
});


    
exports.VerifyEmail = catchAsync(async(req, res,next)=>{

    const emailExists = await User.findOne({ where: { user_email: 'user_email' } });
    if (emailExists ) {
    res.json("Email already registered")
    }
    });
    exports.findUsersByID = catchAsync(async(req, res, next)=>{
            const user = await UserModel.findByID()
           if(!user){
        return next(new Error('Users not found!'))
       }
     else
      return res.send(user);
    });
    exports.updateUser = catchAsync(async(req,res , next ) =>{
           req.body.UserId =req.user.UserId;
        
          const user = await UserModel.update(req.body, {where: { UserId:req.user.UserId}});
          if(!user){
               return next(new Error('Users not found!'));
           }
        
          res.status(200).json({
         status: "success",
        message:"Profile successfully updated"
        
         });
        
        });
        
        exports.DeleteUser = catchAsync(async(req,res, next)=>{
        
        const user = await UserModel.destroy(req.body , {where: {UserId:req.user.UserId}})
        
        
        res.status(200).json({
           status: "success",
            message:"Profile successfully Deleted"
            
         });
        });

