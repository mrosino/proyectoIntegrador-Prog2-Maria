const db = require("../database/models");
const bcrypt = require("bcryptjs");
let userController = {
  register: (req, res) => {
    res.render("register", {
      title: "Pagina de registracion",
      error: req.cookies.error,
    });
  },
  registered: async (req, res) => {
    let user = await db.Users.findOne({
      where: { email: req.body.email },
    });
    if (!user && req.body.password == req.body.passwordConfirm) {
      if (req.body.password.length > 5) {
        let encryptedPss = bcrypt.hashSync(req.body.password);
       //creamos cada campo manualmente y no con req.body de una, por el tema de version en phpmyadmin y las fechas
        await db.Users.create({
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          province: req.body.province,
          gender: req.body.gender,
          birthday: req.body.birthday,
          phone: req.body.phone,
          profile_pic: req.file.filename,
          password: encryptedPss,
          registration_date: new Date().getTime(),
          userUpdate_date: new Date().getTime(),
        })
        req.flash("success", "Te registraste con éxito");
        return res.redirect("/ramo/login");
      } else {
        req.flash("danger", "La contraseña debe tener minimo cinco caracteres");
        return res.redirect(req.headers.referer);
      }
    } else {
      res.cookie("error", "failedRegistered", { maxAge: 1000 * 30 });
      return res.redirect("/ramo/login");
    }
  },
  emailEdit: (req, res) => {
    return res.render("emailEdit", {
      title: "Pagina de edicion de perfil",
     
    });
  },
  pssEdit: (req, res) => {
    return res.render("pssEdit", {
      title: "Pagina de edicion de perfil",
      
    });
  },
  imagenEdit: (req, res) => {
    return res.render("imagenEdit", {
      title: "Pagina de edicion foto de perfil",
     
    });
  },
  profile: async (req, res) => {
  
    let visitedProfile = req.params.id;

    let visitor = await db.Users.findOne({
      where: { id: visitedProfile },
    });
    let user = await db.Users.findOne({
      where: { id: req.session.user.id },
    });
    let products = await db.Products.findAll({
      where: { created_by: visitedProfile },
    });
    let comments = await db.Comments.findAll({
      where: { creator_id: visitedProfile },
    });
    let followers = await db.Follower.findAll({
      where: { follows: visitor.id },
      include: [
        {
          association: "followed_users",
        },
      ],
    });
    let followed = await db.Follower.findOne({
      where: { follows: visitor.id, followed_by: req.session.user.id },
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
