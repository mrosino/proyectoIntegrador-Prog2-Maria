const db = require("../database/models");
const Op = db.Sequelize.Op;
// Necesario para encriptar y desencriptar las contraseñas
const bcrypt = require("bcryptjs");
let userController = {
  
  register: (req, res) => {
    res.render("register", {
      title: "Pagina de registracion",
      logged: false,
    });
  },
  registerCreateUser: (req, res) => {
    // Encriptamos la contraseña antes de mandar a la base de datos
    let passEncriptada = bcrypt.hashSync(req.body.password);
    let info = req.body;
    db.Users.create({
      name: req.body.name,
      surname: info.surname,
      email: info.email,
      province: info.province,
      document: info.document,
      gender: info.gender,
      birthday: info.birthday,
      phone: info.phone,
      password: passEncriptada,
    });

    res.redirect("/ramo");
  },
  profile: (req, res) => {
    let id = req.params.id;
    db.Products.findByPk(id)
      .then((data) => {
        db.Comments.findAll({
          raw: true,
          where: { creator_id: req.params.id },
        }).then((info) => {
          return res.render("products", {
            comments: info.dataValues,
            products: data.dataValues, //aca pido el nombre de la base de datos
            title: "Pagina de detalle de productos",
            logged: true,
          });
        });
      })
      .catch((error) => {
        return resolve.send(error);
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
