var express = require('express');
var router = express.Router();

let productController = require('../controllers/productController');

router.get('/products/:id?', productController.products);

router.get('/productAdd', productController.productAdd); //no anda

module.exports = router;
