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

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        let rutaDirectorio = 'public/images/products';
        cb(null,rutaDirectorio);
    },
    filename: (req,file,cb)=> {
        let nombreArchivo = file.fieldname + '-' + Date.now() +path.extname(file.originalname);
        cb(null, nombreArchivo)
    }
}); 
const upload = multer ({
    storage: storage
});
router.post('/productAdd', upload.single('imagen') ,productController.productAdded);
router.post('/products/productDelete', productController.productDelete);

router.get('/productEdit/:id', productController.productEdit);
router.post('/productEdit', productController.productEdited);
module.exports = router;
