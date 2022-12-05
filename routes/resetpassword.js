const router = require('express').Router();

const userController = require('../controller/resetpasswordController');

router
    .route("/")
    .post(userController.sendEmail)
    
    
    
module.exports = router;