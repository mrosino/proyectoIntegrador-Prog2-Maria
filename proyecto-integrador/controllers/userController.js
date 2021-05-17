const db = require("../database/models")
const Op = db.Sequelize.Op;
// Necesario para encriptar y desencriptar las contraseñas
const bcrypt = require('bcryptjs');
let userController = {
  login: (req, res) => {
    res.render("login", {
      title: "Pagina de login",
      logged: false,
    });
  },
  register: (req, res) => {
    res.render("register", {
      title: "Pagina de registracion",
      logged: false,
    });
  },
  registerCreateUser: (req, res) => {
    // Encriptamos la contraseña antes de mandar a la base de datos
    let passEncriptada = bcrypt.hashSync(req.body.password);
    
    db.users.create({
        name: req.body.name,
        password: passEncriptada
    }).then(usuario => {
        res.redirect('/');
    });

},
  profile: (req, res) => {
    res.render("profile", {
      title: "Pagina de perfil",
      logged: true,
    });
  },
  profileEdit: (req, res) => {
    res.render("profileEdit", {
      title: "Pagina de edicion de perfil",
      logged: false,
    });
  },
};
module.exports = userController;
