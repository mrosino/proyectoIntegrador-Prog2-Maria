const db = require("../database/models");
const { resolveInclude } = require("ejs");
const Op = db.Sequelize.Op;

let productController = {
  products: (req, res) => {
    let id = req.params.id;
    db.Products.findByPk(id)
      .then((data) => {
        db.Comments.findAll({
          raw: true,
          where: { "creator_id": req.params.id },
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
//DEJO LA VISTA ASÍ HASTA QUE SEPAMOS COMO RELACIONAR LA FK CON EL CREATOR ID


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
