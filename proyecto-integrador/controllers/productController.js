const db = require("../database/models");
const { resolveInclude } = require("ejs");
const Op = db.Sequelize.Op;

let productController = {
  products: (req, res) => {
    let id = req.params.id;
    db.Products.findOne({
      where: { id: id },
      include: [
        {
          association: "products_users",
        },
      ],
    })

      .then((data) => {
        db.Comments.findAll({
          include: [
            {
              association: "comments_users",
            },
          ],

          // raw: true, //VAMOS A TENER QUE SACAR ESTO chequear que en ningun controlador haya que agregar datavalues
          where: { product_id: id },
          order: [["creation_date", "ASC"]],
        }).then((info) => {
          return res.render("products", {
            comments: info,
            products: data.dataValues, //aca pido el nombre de la base de datos
            title: "Pagina de detalle de productos",
          });
        });
      })
      .catch((error) => {
        throw error;
      });
  },
  commentAdd: (req, res) => {
    db.Comments.create({
      product_id: req.body.id,
      creator_id: res.locals.user.id,
      content: req.body.comment,
    })
      .then(() => {
        return res.redirect(req.headers.referer);
      })
      .catch((error) => {
        throw error;
      });
  },
  commentDelete: (req, res) => {
    db.Comments.destroy({
      where: { id: req.body.id },
    })
      .then(() => {
        return res.redirect(req.headers.referer);
      })
      .catch((error) => {
        throw error;
      });
  },
  productAdd: (req, res) => {
    return res.render("productAdd", {
      title: "Pagina de agregar producto ",
    });
  },
  productAdded: (req, res) => {
    let info = req.body;
    db.Products.create({
      created_by: res.locals.user.id,
      image: info.image,
      product_name: info.product_name,
      creation_date: moment().add(10, "days").calendar(),
      description: info.description,
    })
      .then(() => {
        return res.redirect(`/ramo/profile/${info.id}`);
      })

      .catch((error) => {
        throw error;
      });
  },
  productDelete: (req, res) => {
    db.Comments.destroy({
      where: { id: req.body.id },
    })
      .then(() => {
        db.Products.destroy({
          where: { id: req.body.id },
        });
      })
      .then(() => {
        return res.redirect("/ramo");
      })
      .catch((error) => {
        throw error;
      });
  },

  productEdit: (req, res) => {
    if (!res.locals.user) {
      return res.redirect("/ramo/login");
    }
    res.render("productEdit", {
      title: "Pagina de agregar producto ",
      id: req.params.id,
      //updated_date: Date.now(),
    });
  },
  productEdited: (req, res) => {
    let editId = req.body.id;
    db.Products.update(
      {
        product_name: req.body.product_name,
        description: req.body.description,
        //fatla ver para cambiar la imagen
      },
      {
        where: { id: editId },
      }
    )
      .then(() => {
        return res.redirect(`/ramo/products/${editId}`);
      })

      .catch((error) => {
        return res.send(error);
      });
  },
};
module.exports = productController;
