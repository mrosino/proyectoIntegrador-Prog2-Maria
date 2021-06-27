const db = require("../database/models");
const bcrypt = require("bcryptjs");

var securityController = {
  login: (req, res) => {
    return res.render("security/login", {
      title: "Ingresar ramo",
      error: req.cookies.error,
      failed: req.query.failed,
    });
  },
  authenticate: async (req, res) => {
    let user = await db.Users.findOne({ where: { email: req.body.email } });

    if (user != undefined) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        if (req.body.remember) {
          res.cookie("remembered", user.id, { maxAge: 1000 * 60 * 30 });
        }
        req.session.user = user;
        req.session.logged = true;
        req.session.save();
        return res.redirect(`/ramo/profile/${user.id}`);
      } else {
        req.flash("danger", "La contraseña ingresada es incorrecta");
        return res.redirect(req.headers.referer);
      }
    } else {
      req.flash("danger", "El correo ingresado es incorrecto");
      return res.redirect(req.headers.referer);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("loggedIn");
    res.clearCookie("remembered");
    return res.redirect("/ramo/login");
  },

  editedPass: async (req, res) => {
    let user = await db.Users.findOne({ where: { id: req.session.user.id } });

    if (req.body.password.length > 5) {
      if (bcrypt.compareSync(req.body.oldPss, user.password)) {
        let encryptedPss = bcrypt.hashSync(req.body.password);
        await db.Users.update(
          {
            password: encryptedPss,
            userUpdate_date: new Date().getTime(),
          },
          {
            where: { id: req.session.user.id },
          }
        );
        req.flash("success", "Actualizaste tu contraseña");
        return res.redirect("/ramo/profile/" + req.session.user.id);
      } else {
        req.flash("danger", "Contraseña anterior incorrecta");
        return res.redirect(req.headers.referer);
      }
    } else {
      req.flash("danger", "La contraseña debe tener minimo cinco caracteres");
      return res.redirect(req.headers.referer);
    }
  },

  imagenEdited: async (req, res) => {
    let user = await db.Users.findByPk(req.session.user.id);

    if (bcrypt.compareSync(req.body.password, user.password)) {
      await db.Users.update(
        {
          profile_pic: req.file.filename,
          update_date: new Date().getTime(),
        },
        {
          where: { id: req.session.user.id },
        }
      );
      req.flash("success", "Actualizaste tus datos");
      return res.redirect(`/ramo/profile/${user.id}`);
    } else {
      req.flash("danger", "La contraseña no es correcta");
      return res.redirect(req.headers.referer);
    }
  }, editedUser: async (req, res) => {
    let submitedEmail = req.body.email;
    let email = await db.Users.findOne({
      where: { email: submitedEmail },
    });
    if (!email) {
      let user = await db.Users.findOne({ where: { id: req.session.user.id } });
      if (bcrypt.compareSync(req.body.password, user.password)) {
        await db.Users.update(
          {
            email: req.body.email,
            userUpdate_date: new Date().getTime(),
          },
          { where: { id: req.session.user.id } }
        );
        req.flash("success", "Actualizaste tus datos");
        return res.redirect(`/ramo/profile/${req.session.user.id}`);
      } else {
        req.flash("danger", "Contraseña incorrecta");
        return res.redirect(req.headers.referer);
      }
    } else {
      req.flash("danger", "Email ya utilizado");
      return res.redirect(req.headers.referer);
    }
  },
};

module.exports = securityController;
