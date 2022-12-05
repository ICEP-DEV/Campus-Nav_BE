const router = require('express').Router();

const locationController = require('../controller/currentlocation');


router
    .route("/")
    .post( locationController.createLocation )

    

module.exports = router;