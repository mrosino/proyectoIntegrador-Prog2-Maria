let productController = {
  products: (req, res) => {
    id = req.params.id;
    res.render("products", {
      id,
      title: "Pagina de productos",
      logged: false,
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
