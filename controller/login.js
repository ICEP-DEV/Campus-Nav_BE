//CRUD - Create, Read, Update Delete

const LoginModel = require('../models/usermodels');
const catchAsync = require('../utils/catchAsync');


 exports.compareLogin = catchAsync(async(req,res,next)=>{
 const {user_email,password}=req.body;

 const login = await LoginModel.findOne({ where:{user_email},limit:1 }).catch((err)=>{
        
    console.log("Error:",err);

 });

 if(!login)
return res.json({message:"USER EMAIL DOES NOT MATCH "});

if(login.password !== password)
return res.json({message:"USER PASSWORD DOES NOT MATCH  "});
else
{
    if(req.body.user_email == login.user_email && req.body.password == login.password){
        session=req.session;
        session.user_email=req.body.user_email;
        console.log(req.session)
        res.send(`Hey there, welcome to Campus Navigation`);
    }
    else
    {
        res.send('Invalid email or password');
    }

 }
});

exports.getlogin = catchAsync(async(req, res, next)=>{
    const LoginData  = await LoginModel.findAll()
   });
 

