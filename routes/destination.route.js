const router = require('express').Router();

const destinationController = require('../controller/destinationController');


router
    .route("/")
    .post( destinationController.createDestination)

    

module.exports = router;