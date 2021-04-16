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
}
module.exports = productController;