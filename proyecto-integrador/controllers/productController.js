let productController={
    products:(req, res) => {
        res.render("products", { title:"Pagina de productos"})
    },
    productAdd:(req, res) => {
        res.render("productAdd", { title:"Pagina de agregar producto "})
    },
}
module.exports = productController;