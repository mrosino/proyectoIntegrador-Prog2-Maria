const db = require("../database/models");
const Op = db.Sequelize.Op;
// Necesario para encriptar y desencriptar las contraseñas
const bcrypt = require("bcryptjs");
let userController = {
    register: (req, res) => {
        res.render("register", {
            title: "Pagina de registracion",
        });
    },
    registerCreateUser: (req, res) => {
        db.Users.findAll({ where: { email: req.body.email } }).then((user) => {
            if (user === req.body.email) {
                return res.redirect("/ramo/register?failed=1");
                //le vamos a poner una cookie que diga que ya esta registrado
                //no nos hace caso y nos tira error preguntado por slack
            } else {
                let passEncriptada = bcrypt.hashSync(req.body.password);
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
                    password: passEncriptada,
                }).then(() => {
                    return res.redirect("/ramo/login");
                });
            }
        });
    },
    profile: (req, res) => {
        let id = res.locals.user.id; // ver de poner req.sessions.user.id
        let  visitedProfile = req.params.id
         db.Users.findOne({
            where: { id: visitedProfile },
            raw: true,
        })
        .then((visitor) => {
        db.Users.findOne({
                where: { id: id },
                raw: true,
            })
            .then((user) => {
                db.Products.findAll({
                    where: { created_by: visitedProfile },
                    raw: true,
                }).then((products) => {
                    db.Comments.findAll({
                        where: { creator_id: visitedProfile },
                    }).then((comments) => {
                        return res.render("profile", {
                         
                            visitor: visitor,
                            title: "Pagina de perfil",
                            user: user,
                            products: products,
                            comments: comments,
                        });
                    });
                });
            })
            .catch((err) => {
                console.log(err);
            });
    })
},
    profileEdit: (req, res) => {
        res.render("profileEdit", {
            title: "Pagina de edicion de perfil",
        });
    },
};
module.exports = userController;