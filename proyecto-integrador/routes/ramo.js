var express = require('express');
var router = express.Router();

let ramoController = require('../controllers/ramoController');
let db = require('../database/models')

router.get('/', ramoController.index);

router.get('/searchResult', ramoController.searchResult);

router.get('/contacto', ramoController.contacto);


  

module.exports = router;

