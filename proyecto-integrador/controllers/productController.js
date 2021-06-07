const db = require("../database/models");
const { resolveInclude } = require("ejs");
const bcrypt = require("bcryptjs");
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
          where: { product_id: id },
          limit: 5,
          order: [["creation_date", "DESC"]],
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
      creation_date: new Date().getTime(),
    })
      .then(() => {
        return res.redirect(req.headers.referer);
      })
      .catch((error) => {
        throw error;
      });
  },
  commentDelete: (req, res) => {
    if (req.body.id == req.session.user.id) {
      db.Comments.destroy({
        where: { id: req.body.id },
      })
        .then(() => {
          return res.redirect(`/ramo/products${req.params.id}`);
        })
        .catch((error) => {
          throw error;
        });
    }

  },
  productAdd: (req, res) => {
    return res.render("productAdd", {
      title: "Pagina de agregar producto ",
    });
  },
  productAdded: (req, res) => {
    console.log('/images/products/' + req.file.filename);
    
    let info = req.body;
    db.Products.create({
      created_by: res.locals.user.id,
      image: info.image,
      product_name: info.product_name,
      creation_date: new Date().getTime(),
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
    db.Products.findOne({
      where: { created_by: req.body.id },

    })
      .then((ok) => {
        if (!ok) {
          res.cookie("error", "changeSession", { maxAge: 1000 * 60 });
          req.session.destroy();
          res.clearCookie("loggedIn");
          return res.redirect("/ramo/login")
        }
        else {
          db.Comments.destroy({
            where: { id: req.body.idP },
          })
            .then(() => {
              db.Products.destroy({
                where: { id: req.body.idP },
              });
            })
            .then(() => {
              return res.redirect("/ramo");
            })
            .catch((error) => {
              throw error;
            });
        }
      })

  },

  productEdit: (req, res) => {
    let idP = req.params.id;
    db.Products.findOne({
      where: { id: idP },
      raw: true
    })
      .then((product) => {
        if (product.created_by != req.session.user.id) {
          res.cookie("error", "changeSession", { maxAge: 1000 * 60 });
          req.session.destroy();
          res.clearCookie("loggedIn");
          return res.redirect("/ramo/login")
        } else {
          return res.render("productEdit", {
            products: product,
            title: "Pagina de agregar producto ",
          });
        }
      })
      .catch((error) => {
        throw error;
      });
  },
  productEdited: (req, res) => {
    db.Products.findOne({
      where: {
        created_by: req.body.id
      }
    })
      .then(() => {
        db.Users.findOne({
          where: { id: req.body.id }
        })
          .then((user) => {
            if (bcrypt.compareSync(req.body.password, user.password)) {
              db.Products.update(
                {
                  product_name: req.body.product_name,
                  description: req.body.description,
                  update_date: new Date().getTime()
                  //fatla ver para cambiar la imagen
                },
                {
                  where: { id: req.body.idP },
                }
              )

                .then(() => {
                  return res.redirect(`/ramo/products/${req.body.idP}`);
                })


            } else {
              res.cookie("error", "noPss", { maxAge: 1000 * 60 });
              return res.redirect(req.headers.referer);
            }
          })
          .catch(function (error) {
            throw error;
          });

      })

  },
};
module.exports = productController;
