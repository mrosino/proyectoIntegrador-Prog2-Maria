
let userController={
    login:(req, res) => {
        res.render("login", { title:"Pagina de login"})
    },
    register:(req, res) => {
        res.render("register", { title:"Pagina de registracion"})
    },
    profile:(req, res) => {
        res.render("profile", { title:"Pagina de perfil"})
    },
    profileEdit:(req, res) => {
        res.render("profileEdit", { title:"Pagina de edicion de perfil"})
    },
    contacto:(req, res) => {
        res.render("contacto", { title:"Pagina muestra los contactos del sitio"})
    },

}
module.exports = userController;