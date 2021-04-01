var express = require('express');
var router = express.Router();

let mlController = require('../controllers/mlController');

router.get('/', mlController.index);

router.get('/products', mlController.products);

router.get('/register', mlController.register);

router.get('/login', mlController.login);

router.get('/productAdd', mlController.productAdd);

router.get('/profile', mlController.profile);

router.get('/searchResult', mlController.searchResult);

router.get('/profileEdit', mlController.profileEdit);

module.exports = router;

