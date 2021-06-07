var express = require('express');
var router = express.Router();
let db = require('../database/models');
const multer = require ('multer');
const path = require ('path');
let productController = require('../controllers/productController');

router.get('/products/:id?', productController.products);

router.post('/products/commentAdd', productController.commentAdd);
router.post('/products/commentDelete', productController.commentDelete);

router.get('/productAdd', productController.productAdd);

router.post('/productAdd', upload.single('imagen') ,productController.productAdded);
router.post('/products/productDelete', productController.productDelete);

router.get('/productEdit/:id', productController.productEdit);
router.post('/productEdit', productController.productEdited);
module.exports = router;
