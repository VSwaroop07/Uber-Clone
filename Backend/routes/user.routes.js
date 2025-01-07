const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const userController = require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'), 
    body('fullname.firstname').isLength({min:3}).withMessage('First Name Should be more then 3 Characters long'),
    body('password').isLength({min:6}).withMessage('Password Must be 6 Charaters long'),
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'), 
    body('password').isLength({min:6}).withMessage('Password Must be 6 Charaters long'),
],
    userController.loginUser
)

module.exports = router;