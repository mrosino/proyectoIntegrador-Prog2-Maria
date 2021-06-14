var express = require("express");
var router = express.Router();
let db = require("../database/models");
const multer = require("multer");
const path = require("path");

let productController = require("../controllers/productController");

router.get("/products/:id?", productController.products);

router.post("/products/commentAdd", productController.commentAdd);
router.post("/products/commentDelete", productController.commentDelete);
router.post("/products/productDelete", productController.productDelete);
router.get("/productEdit/:id", productController.productEdit);
router.get("/productAdd", productController.productAdd);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let directoryRoute = "public/images/products";
    cb(null, directoryRoute);
  },
  filename: (req, file, cb) => {
    let fileName =
      Date.now() + path.extname(file.originalname) + "-" + file.fieldname;
    cb(null, fileName);
  },
});
const upload = multer({
  storage: storage,
});
router.post(
  "/productAdd",
  upload.single("image"),
  productController.productAdded
);
router.post(
  "/productEdit",
  upload.single("newImage"),
  productController.productEdited
);

module.exports = router;
