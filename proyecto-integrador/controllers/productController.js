const db = require("../database/models");
const { resolveInclude } = require("ejs");
const Op = db.Sequelize.Op;

let productController = {
    products: (req, res) => {
        let id = req.params.id;
        db.Products.findByPk(id)
            .then((data) => {
                db.Comments.findAll({
                    raw: true,
                    where: { product_id: id },
                    order: [
                        ["creation_date", "DESC"]
                    ],
                }).then((info) => {
                    return res.render("products", {
                        comments: info,
                        products: data.dataValues, //aca pido el nombre de la base de datos
                        title: "Pagina de detalle de productos",
                    });
                });
            })
            .catch((error) => {
                return resolve.send(error);
            });
    },
    commentAdd: (req, res) => {
        db.Comments.create({
                product_id: req.body.id,
                creator_id: res.locals.user.id,
                content: req.body.comment,
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
                where: { id: req.body.id },
            })
            .then(() => {
                return res.redirect(req.headers.referer);
            })
            .catch((error) => {
                throw error;
            });
    },
    productAdd: (req, res) => {
       res.render("productAdd", {
            title: "Pagina de agregar producto ",
        });

        
    },

//productADd: (req, res) => {
//db.Products.create ({
 // product_id: req.body.id, 
 // image: req.body.image, 
 // product_name: req.body.productname, 
 // creation_date: req.body.fechacreacion, 
 // description:req.body.descripcion, 
//})
//.then(() => {
 // return res.redirect('/home'); 
//})
//.catch((error) => {
 // return res.send (error); 
//})

//}, 

//productDelete: (req, res) => {
//db.Products.destroy ({
 // where: { id: req.params.id}
//})
//.then(() => {
  //return res.redirect("/user/profile" + res.session.userLogueado.id); 
//})
//.catch ((error) => {
 // return res.send (error);
//})
//},

    productEdit: (req, res) => {
        res.render("productEdit", {
            title: "Pagina de agregar producto ",
            id: req.params.id,
        });
    },
    productEdited: (req, res) => {
        let editId = req.body.id;
        db.Products.update({
                product_name: req.body.product_name,
                description: req.body.description,
                //fatla ver para cambiar la imagen
            }, {
                where: { id: editId },
            })
            .then(() => {
                return res.redirect(`/ramo/products/${editId}`);
            })

        .catch((error) => {
            return res.send(error);
        });
    },
};
module.exports = productController;