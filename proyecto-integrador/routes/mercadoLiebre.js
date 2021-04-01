var express = require('express');
var router = express.Router();

let mlController = require('../controllers/mlController');
router.get('/', mlController.listadoBandas);