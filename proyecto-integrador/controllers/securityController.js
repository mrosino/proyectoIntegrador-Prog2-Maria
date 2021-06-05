const db = require("../database/models");
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
var securityController = {
  login: (req, res) => {
    return res.render("security/login", {
      title: "Ingresar ramo",
      error: req.cookies.error,
      failed: req.query.failed,
    });
  },
  authenticate: (req, res) => {
    db.Users.findOne({ where: { email: req.body.email } })

      .then((user) => {
        if (user != undefined) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            if (req.body.remember != undefined) {
              res.cookie("remembered", user.id, { maxAge: 1000 * 60 * 30 }); //pensar si 30 min es un nro razonable
            }
            req.session.user = user;
            req.session.logged = true;
            req.session.save();

            return res.redirect(`/ramo/profile/${user.id}`);
          } else {
            res.cookie("error", "noPss", { maxAge: 1000 * 60 });
            return res.redirect(req.headers.referer);
          }
        } else {
          res.cookie("error", "noUser", { maxAge: 1000 * 60 });
          return res.redirect(req.headers.referer);
        }
      })
      .catch((error) => {
        throw error;
      });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("loggedIn");
    return res.redirect("/ramo");
  },
  editedUser: (req, res) => {
    let submitedEmail = req.body.email;
    db.Users.findOne({
      where: { email: submitedEmail }
    })
      .then((email) => {
        if (!email) {
          db.Users.findOne({ where: { id: req.body.id } })
            .then((user) => {
              if (bcrypt.compareSync(req.body.password, user.password)) {
                db.Users.update(
                  {
                    email: req.body.email,
                    userUpdate_date: new Date().getTime()
                  },
                  {
                    where: { id: req.body.id },
                  })
                  .then(() => {
                    return res.redirect("/ramo/profile/" + req.body.id);
                  })
                  .catch(function (error) {
                    throw error;
                  })
              } else {
                res.cookie("error", "noPss", { maxAge: 1000 * 60 });
                req.session.destroy();
                res.clearCookie("loggedIn");
                return res.redirect("/ramo/login");

              }

            })
        }
        else {
          res.cookie("error", "emailUsed", { maxAge: 1000 * 60 });
          return res.redirect(req.headers.referer);

        }

      })

  },

  editedPass: (req, res) => {
    db.Users.findOne({ where: { id: req.body.id } }).then((user) => {
      if (req.body.id == req.session.user.id) {
        if (bcrypt.compareSync(req.body.oldPss, user.password)) {
          let encryptedPss = bcrypt.hashSync(req.body.password);
          db.Users.update(
            {
              password: encryptedPss,
              userUpdate_date: new Date().getTime()
            },
            {
              where: { id: req.body.id },
            }
          )

            .then(function (data) {
              return res.redirect("/ramo/profile/" + req.body.id);
            })

            .catch(function (error) {
              throw error;
            });
        }
      } else {
        res.cookie("error", "wrongUser", { maxAge: 1000 * 60 });
        return res.redirect(req.headers.referer);
      }
    });
  },
};

module.exports = securityController;
