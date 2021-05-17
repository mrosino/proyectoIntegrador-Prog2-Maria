var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController');

router.get('/register', userController.register);
router.post('/register', userController.registerCreateUser);

router.get('/profile', userController.profile);
router.get('/profileEdit', userController.profileEdit); 


module.exports = router;
