var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController');

router.get('/register', userController.register);

router.get('/login', userController.login);

router.get('/profile', userController.profile);

router.get('/profileEdit', userController.profileEdit); 

router.get('/contacto', userController.contacto); 

module.exports = router;
