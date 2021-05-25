const db = require("../database/models");
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
var securityController = {
    login: (req, res) => {
        return res.render("security/login", {
            failed: req.query.failed,
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

                return res.redirect(req.headers.referer);
            })
            .catch((error) => {
                return res.redirect(req.headers.referer);
            });
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/ramo");
    },
    editedUser: (req, res) => {
        db.Users.findOne({ where: { email: req.body.email } }).then((user) => {
            if (!user) {
                db.Users.update({
                        email: req.body.email,
                    }, {
                        where: { id: req.body.id },
                    })
                    .then(function(data) {
                        console.log(data);
                        res.redirect("/ramo/profile/" + req.body.id);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            } else {
                res.redirect(req.headers.referer);
            }
        });
    },
    editedPass: (req, res) => {
        db.Users.findOne({ where: { password: req.body.password } }).then(
            (user) => {
                if (!user) {
                    let encryptedPss = bcrypt.hashSync(req.body.password);
                    db.Users.update({
                            password: encryptedPss,
                        }, {
                            where: { id: req.body.id },
                        })
                        .then(function(data) {
                            console.log(data);
                            res.redirect("/ramo/profile/" + req.body.id);
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                } else {
                    res.redirect(req.headers.referer);
                }
            }
        );
    },
};

module.exports = securityController;