
let mlController= {
    index: (req, res) => {
        res.render("index", { title:"Pagina de inicio"}) 
    },
    login:(req, res) => {
        res.render("login", { title:"Pagina de login"})
    },
    register:(req, res) => {
        res.render("register", { title:"Pagina de registracion"})
    },
    products:(req, res) => {
        res.render("products", { title:"Pagina de productos"})
    },
    productAdd:(req, res) => {
        res.render("productAdd", { title:"Pagina de agregar producto "})
    },
    profile:(req, res) => {
        res.render(" profile", { title:"Pagina de perfil"})
    },
    profileEdit:(req, res) => {
        res.render(" profileEdit", { title:"Pagina de edicion de perfil"})
    },
    searchResult:(req, res) => {
        res.render("searchResult", { title:" Pagina resultado de busquedas"})
    },

}

module.exports = mlController;