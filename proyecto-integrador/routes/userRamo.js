var express = require('express');
var router = express.Router();
let db = require('../database/models')
let userController = require('../controllers/userController');

router.get('/register', userController.register);
router.post('/register', userController.registerCreateUser);

router.get('/login', userController.login);

router.get('/profile', userController.profile);

router.get('/profileEdit', userController.profileEdit); 




module.exports = router;
