const db = require("../database/models");
const bcrypt = require("bcryptjs");
let productController = {
  productAdd: (req, res) => {
    return res.render("productAdd", {
      title: "Pagina de agregar producto ",
    });
  },
  commentAdd: async (req, res) => {
    await db.Comments.create({
      product_id: req.body.id,
      creator_id: req.session.user.id,
      content: req.body.comment,
      creation_date: new Date().getTime(),
    });
    return res.redirect(req.headers.referer);
  },
  commentDelete: async (req, res) => {
    await db.Comments.destroy({
      where: { id: req.body.idC },
    });
    req.flash("danger", "Comentario eliminado");
    return res.redirect(req.headers.referer);
  },
  productAdded: async (req, res) => {
    await db.Products.create({
      created_by: req.session.user.id,
      image: req.file.filename,
      product_name: req.body.product_name,
      creation_date: new Date().getTime(),
      update_date: new Date().getTime(),
      description: req.body.description,
      price: req.body.price,
    });
    req.flash("success", "Producto añadido!");
    return res.redirect(`/ramo/profile/${req.session.user.id}`);
  },
  productEdit: async (req, res) => {
    let product = await db.Products.findOne({
      where: { id: req.params.id },
    });
    if (product) {
      if (product.created_by != req.session.user.id) {
        req.session.destroy();
        res.clearCookie("loggedIn");
        res.clearCookie("remembered");
        return res.redirect(`/ramo/login`);
      } else {
        return res.render("productEdit", {
          products: product,
          title: "Pagina de agregar producto ",
        });
      }
    } else {
      return res.redirect(`/`);
    }
  },
  productEdited: async (req, res) => {
    let user = await db.Users.findOne({
      where: { id: req.session.user.id },
    });
    let image;
    if (bcrypt.compareSync(req.body.password, user.password)) {
      if (req.file) {
        image = req.file.filename;
      } else {
        image = req.body.oldimage;
      }
      await db.Products.update(
        {
          product_name: req.body.product_name,
          description: req.body.description,
          update_date: new Date().getTime(),
          image: image,
          price: req.body.price,
        },
        {
          where: { id: req.body.productId },
        }
      );
      return res.redirect(`/ramo/product/${req.body.productId}`);
    } else {
      req.flash("danger", "La contraseña no es correcta");
      return res.redirect(req.headers.referer);
    }
  },
  productDelete: async (req, res) => {
    let correctUser = await db.Products.findOne({
      where: { created_by: req.session.user.id },
    });
    if (!correctUser) {
      res.cookie("error", "changeSession", { maxAge: 1000 * 60 });
      req.session.destroy();
      res.clearCookie("loggedIn");
      res.clearCookie("remembered");
      return res.redirect("/ramo/login");
    } else {
      await db.Comments.destroy({
        where: { id: req.body.productId },
      });
      await db.Products.destroy({
        where: { id: req.body.productId },
      });
      req.flash("danger", "Producto eliminado");
      return res.redirect(`/ramo/profile/${req.session.user.id}`);
    }
  },
  products: async (req, res) => {
    let id = req.params.id;
    let data = await db.Products.findOne({
      where: { id: id },
      include: [
        {
          association: "products_users",
        },
      ],
    });
    let info = await db.Comments.findAll({
      include: [
        {
          association: "comments_users",
        },
      ],
      where: { product_id: id },
      limit: 5,
      order: [["creation_date", "DESC"]],
    });

    return res.render("product", {
      comments: info,
      products: data,
      title: "Pagina de detalle de productos",
    });
  },
};
module.exports = productController;
