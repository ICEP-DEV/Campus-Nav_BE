const router = require('express').Router();

const routeController = require('../controller/routeController');

router
    .route("/")
    .post( routeController.createRoute)



module.exports = router;