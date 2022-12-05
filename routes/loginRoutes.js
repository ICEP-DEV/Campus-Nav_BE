const router = require('express').Router();

const loginController = require('../controller/login');


router
    .route("/")
    .post( loginController.compareLogin)

    

module.exports = router;