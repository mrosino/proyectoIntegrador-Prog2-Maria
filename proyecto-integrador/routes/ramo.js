var express = require('express');
var router = express.Router();

let ramoController = require('../controllers/ramoController');

router.get('/', ramoController.index);

router.get('/searchResult', ramoController.searchResult);//no anda 


module.exports = router;

