let productController={
    products:(req, res) => {
        id = req.params.id
        res.render("products", {
            id,
            title:"Pagina de productos"})
    },
    productAdd:(req, res) => {
        res.render("productAdd", { title:"Pagina de agregar producto "})
    },
    productEdit:(req, res) => {
        res.render("productEdit", { title:"Pagina de editar producto "})
    },
}
module.exports = productController;