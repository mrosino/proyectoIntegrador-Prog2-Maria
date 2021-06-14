const db = require("../database/models");

const bcrypt = require("bcryptjs");

let userController = {
  register: (req, res) => {
    res.render("register", {
      title: "Pagina de registracion",
      error: req.cookies.error,
    });
  },
  registered: (req, res) => {
    let submitedEmail = req.body.email;
    db.Users.findOne({
      where: { email: submitedEmail },
    })
      .then((user) => {
        if (!user && req.body.password == req.body.passwordConfirm) {
          if (req.body.password.length > 4) {
            let encryptedPss = bcrypt.hashSync(req.body.password);
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
              profile_pic: req.file.filename,
              password: encryptedPss,
              registration_date: new Date().getTime(),
              userUpdate_date: new Date().getTime(),
            }).then(() => {
              req.flash("success", "Te registraste con éxito");
              return res.redirect("/ramo/login");
            });
          } else {
            res.cookie("error", "length", { maxAge: 1000 * 60 });
            return res.redirect(req.headers.referer);
          }
        } else {
          res.cookie("error", "failedRegistered", { maxAge: 1000 * 30 });
          return res.redirect("/ramo/login");
        }
      });
  },
  emailEdit: (req, res) => {
    return res.render("emailEdit", {
      title: "Pagina de edicion de perfil",
      error: req.cookies.error,
    });
  },
  pssEdit: (req, res) => {
    return res.render("pssEdit", {
      title: "Pagina de edicion de perfil",
      error: req.cookies.error,
    });
  },
  imagenEdit: (req, res) => {
    return res.render("imagenEdit", {
      title: "Pagina de edicion foto de perfil",
      error: req.cookies.error,
    });
  },

  profile: async (req, res) => {
    let id = req.session.user.id;
    let visitedProfile = req.params.id;

    let visitor = await db.Users.findOne({
      where: { id: visitedProfile },
    });
    let user = await db.Users.findOne({
      where: { id: id },
    });
    let products = await db.Products.findAll({
      where: { created_by: visitedProfile },
    });
    let comments = await db.Comments.findAll({
      where: { creator_id: visitedProfile },
    });
    let followers = await db.Follower.findAll({
      where: { follows: visitor.id },
    });
    let followed = await db.Follower.findOne({
      where: { follows: visitor.id, followed_by: id },
    });
    return res.render("profile", {
      followers: followers,
      followed: followed,
      visitor: visitor,
      title: "Pagina de perfil",
      user: user,
      products: products,
      comments: comments,
    });
  },
};
module.exports = userController;
