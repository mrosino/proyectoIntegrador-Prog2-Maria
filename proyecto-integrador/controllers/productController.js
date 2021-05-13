const db = require("../database/models")
const Op = db.Sequelize.Op;
let productController = {
  products: (req, res) => {
    id = req.params.id;
    res.render("products", {
      id,
      title: "Pagina de productos",
      logged: true,
    });
  },
  productAdd: (req, res) => {
    res.render("productAdd", {
      title: "Pagina de agregar producto ",
      logged: true,
    });
  },
  productEdit: (req, res) => {
    res.render("productEdit", {
      title: "Pagina de editar producto ",
      logged: true,
    });
  },
};
module.exports = productController;
