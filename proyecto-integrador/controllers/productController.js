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
          where: { "product_id": id },
        }).then((info) => {
          return res.render("products", {
            comments: info,
            products: data.dataValues, //aca pido el nombre de la base de datos
            title: "Pagina de detalle de productos",
            logged: res.locals.logged,
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
      logged: res.locals.logged,
    });
  },

  productEdit: (req, res) => {
    res.render("productEdit", {
      title: "Pagina de agregar producto ",
      logged: res.locals.logged,
    });
  }, //resolver aca rompe
  productEdited: (req, res) => {
    db.Products.findAll({
      where: [{
        product_name: {[Op.like]: req.body.product_name}
      }],

      })
      .then((data)=> {
        return res.render("productEdit",{
          product: data,
          title: "Pagina de editar producto ",
          logged: res.locals.logged,
          //tenemos que lograr pasar el id de todos los productos a la vista
        })
      })
      .catch((error) => {
        return res.send(error);
      })

    
  },
};
module.exports = productController;
