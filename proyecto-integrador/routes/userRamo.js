var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController');

router.get('/register', userController.register);
router.post('/register', userController.registered);
router.get('/profile/:id', userController.profile);
router.get('/emailEdit', userController.emailEdit); 
router.get('/pssEdit', userController.pssEdit); 


module.exports = router;
