var express = require('express');
var router = express.Router();

let mlController = require('../controllers/mlController');

router.get('/', mlController.index);

router.get('/products', mlController.products);

router.get('/register', mlController.register);

router.get('/login', mlController.login);

router.get('/productAdd', mlController.productAdd); //no anda

router.get('/profile', mlController.profile); //no anda 

router.get('/searchResult', mlController.searchResult);//no anda 

router.get('/profileEdit', mlController.profileEdit); //no anda 

module.exports = router;

