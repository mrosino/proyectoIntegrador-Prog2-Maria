const db = require("../database/models");
const bcrypt = require("bcryptjs");

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
            products: data.dataValues, 
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
      creator_id: req.session.user.id,
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
    db.Comments.destroy({
      where: { id: req.body.idC },
    })
      .then(() => {
        req.flash("danger", "Comentario eliminado");
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
      created_by: req.session.user.id,
      image: req.file.filename,
      product_name: info.product_name,
      creation_date: new Date().getTime(),
      description: info.description,
    })
      .then(() => {
        req.flash("success", "Producto añadido!");
        return res.redirect(`/ramo/profile/${info.id}`);
      })
      .catch((error) => {
        throw error;
      });
  },

  productEdit: (req, res) => {
    let idP = req.params.id;
    db.Products.findOne({
      where: { id: idP },
      raw: true,
    })
      .then((product) => {
        if (product.created_by != req.session.user.id) {
          res.cookie("error", "changeSession", { maxAge: 1000 * 60 });
          req.session.destroy();
          res.clearCookie("loggedIn");
          return res.redirect("/ramo/login");
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
        created_by: req.body.id,
      },
    }).then((prod) => {
      db.Users.findOne({
        where: { id: req.body.id },
      })
        .then((user) => {
          let image;
          if (bcrypt.compareSync(req.body.password, user.password)) {
            if (req.file) {
              image = req.file.filename;
            } else {
              image = req.body.imagenH;
            }
            db.Products.update(
              {
                product_name: req.body.product_name,
                description: req.body.description,
                update_date: new Date().getTime(),
                image: image,
              },
              {
                where: { id: req.body.idP },
              })
              .then(() => {
                return res.redirect(`/ramo/products/${req.body.idP}`);
              });
          } else {
            req.flash("danger", "La contraseña no es correcta");
            return res.redirect(req.headers.referer);
          }
        })
        .catch(function (error) {
          throw error;
        });
    });
  },

   productDelete: async (req, res) => {
     let ok = await db.Products.findOne({
       where: { created_by: req.body.id },
     });
   if (!ok) {
       res.cookie("error", "changeSession", { maxAge: 1000 * 60 });
     req.session.destroy();
       res.clearCookie("loggedIn");
     return res.redirect("/ramo/login");
     } else {
      await db.Comments.destroy({
        where: { id: req.body.idP },
      });
       await db.Products.destroy({
        where: { id: req.body.idP },
      });
       req.flash("danger", "Producto eliminado");
       return res.redirect("/ramo");
     }
   },
};

module.exports = productController;
