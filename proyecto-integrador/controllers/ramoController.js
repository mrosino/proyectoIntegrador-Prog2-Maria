const db = require("../database/models");
const Op = db.Sequelize.Op;
let ramoController = {
  index: (req, res) => {
    db.Products.findAll({
      order: [["product_name", "ASC"]],
      limit: 16,
      raw: true,
    })

      .then((data) => {
        return res.render("index", {
          products: data,
          title: "Pagina de inicio",
        });
      })
      .catch((error) => {
        return res.send(error);
      });
  },

  searchResult: (req, res) => {
    let search = req.query.search;

    db.Products.findAll({
      include: [
        {
          association: "products_users",
        },
      ],
      where: [
        {
          description: {
            [Op.like]: "%" + search + "%",
          },
        },
      ],
    })
      .then((description) => {
        db.Products.findAll({
          include: [
            {
              association: "products_users",
            },
          ],
          where: [
            {
              product_name: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        });
      })

      .then((title) => {
        db.Products.findAll({
          include: [
            {
              association: "products_users",
            },
          ],
          where: [
            {
              created_by: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        });
      })

      .then((results) => {
        return res.render("searchResult", {
          by_name: title,
          by_description: description,
          by_author: results,
          lookedFor: req.query.search,
          title: " Pagina resultado de busquedas",
        });
      });
  },

  contacto: (req, res) => {
    res.render("contacto", {
      title: " Pagina muestra con quien contactar del sitio",
    });
  },
};

module.exports = ramoController;

//find all con limite y un orden
//con mas comentarios es de los mas dificiles todavia no lo puedo hacer
