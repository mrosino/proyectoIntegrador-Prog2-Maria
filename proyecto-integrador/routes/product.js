var express = require("express");
var router = express.Router();
const multer = require("multer");
const path = require("path");
let productController = require("../controllers/productController");

router.get("/product/:id?", productController.products);
router.post("/product/commentAdd", productController.commentAdd);
router.post("/product/commentDelete", productController.commentDelete);
router.post("/product/productDelete", productController.productDelete);
router.get("/productEdit/:id", productController.productEdit);
router.get("/productAdd", productController.productAdd);

const storage = multer.diskStorage( {
  destination: (req, file, cb) => {
    let directoryRoute = "public/images/products";
    cb(null, directoryRoute);
  },
  filename: (req, file, cb) => {
    let fileName = Date.now() + path.extname(file.originalname) + "-" + file.fieldname;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage,}); 

router.post("/productAdd",upload.single("image"),productController.productAdded);
router.post("/productEdit", upload.single("newImage"), productController.productEdited);

module.exports = router;