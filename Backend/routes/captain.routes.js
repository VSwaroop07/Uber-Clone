const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const captainController = require('../controllers/captain.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'), 
    body('fullname.firstname').isLength({min:3}).withMessage('First Name Should be more then 3 Characters long'),
    body('password').isLength({min:6}).withMessage('Password Must be 6 Charaters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Vehicle Color Should be more then 3 Characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Vehicle Plate Should be more then 3 Characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Vehicle Capacity Should be a Number'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle Type Should be car, motorcycle or auto'),
    // body('location.lat').isNumeric().withMessage('Location Latitude Should be a Number'),
    // body('location.lng').isNumeric().withMessage('Location Longitude Should be a Number'),
],
    captainController.registerCaptain
)


module.exports = router;