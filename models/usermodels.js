const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/db');


const User = sequelize.define('register',{
    
    user_id:{
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
      
      validate: 
    {
len:{args: [13,13],
msg : 'Incorrrect ID number length',
}
    }  
  },
    first_name:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
       
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
       
      },
      user_type: {
        type: Sequelize.STRING,
        allowNull: false,
       
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isEmail:true,
       
         },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    /*
    confirm_password: {
      type: Sequelize.STRING,
      allowNull: false,
      
  },*/
	
});

User.beforeCreate((user,options)=>{
  
  const salt =bcrypt.genSaltSync();
  user.password =bcrypt.hashSync(user.password, salt);
});

User.prototype.validatePassword =function(password){

  return bcrypt.compareSync(password, this.password);
  
}

module.exports = User;
