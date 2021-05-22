const db = require("../database/models");
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
var securityController = {
  login: (req, res) => {
    return res.render("security/login", {
      failed: req.query.failed,
      logged: false,
    });
  },
  authenticate: (req, res) => {
    db.Users.findOne({ where: { email: req.body.email } })

      .then((user) => {
        if (user != undefined) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            req.session.user = user;
            req.session.logged = true;
            req.session.save();

            return res.redirect(`/ramo/profile/${user.id}`);
          }
        }

        res.redirect("/login?failed=1");
      })
      .catch((error) => {
        res.redirect("/login?failed=1");
      });
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },
  editedUser: (req, res) => {
    db.Users.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          db.Users.update({
            email: req.body.email,
          }, {
            where: { id: req.body.id }
          })
            .then(function (data) {
              console.log(data)
              res.redirect('/ramo/profile/' + req.body.id);
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          res.redirect(req.headers.referer)
        }
      })

  },
  editedPass:(req, res) => {
  //   db.Users.findOne({ where: { password: req.body.password } })
  //     .then((user) => {
  //       if (!user) {
           db.Users.update({
             password: req.body.password,
         }, {
            where: { id: req.body.id }
          })
  //           .then(function (data) {
  //             console.log(data)
  //             res.redirect('/ramo/profile/' + req.body.id);
  //           })
  //           .catch(function (error) {
  //             console.log(error)
  //           })
  //       } else {
  //         res.redirect(req.headers.referer)
  //       }
  //     })

  },

};

module.exports = securityController;
