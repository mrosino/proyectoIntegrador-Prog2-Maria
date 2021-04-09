var express = require('express');
var router = express.Router();

let mlController = require('../controllers/mlController');

router.get('/', mlController.index);

router.get('/searchResult', mlController.searchResult);//no anda 


module.exports = router;

