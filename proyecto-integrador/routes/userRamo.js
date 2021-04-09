var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController');

router.get('/register', userController.register);

router.get('/login', userController.login);

router.get('/profile', userController.profile); //no anda 

router.get('/profileEdit', userController.profileEdit); //no anda 

module.exports = router;
