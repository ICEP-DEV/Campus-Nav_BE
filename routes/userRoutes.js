const router = require('express').Router();

const userController = require('../controller/user');


    
    router.route('/').post(userController.createUser);
    router.route('/').get(userController.getUser);
    
module.exports = router;