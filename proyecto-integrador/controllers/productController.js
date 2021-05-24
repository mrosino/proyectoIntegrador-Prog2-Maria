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

    });
  },

  productEdit: (req, res) => {
    res.render("productEdit", {
      title: "Pagina de agregar producto ",
      id: req.params.id
    });
  },
  productEdited: (req, res) => {
    let editId = req.body.id
    db.Products.update({
      product_name: req.body.product_name,
      description: req.body.description
      //fatla ver para cambiar la imagen 

    }, {
      where: { id: editId }
    })
    .then(()=>{
      return res.redirect (`/ramo/products/${editId}`)
    })

      .catch((error) => {
        return res.send(error);
      })


  },
};
module.exports = productController;
