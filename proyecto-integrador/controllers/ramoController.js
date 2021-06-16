const db = require("../database/models");
const Op = db.Sequelize.Op;
let ramoController = {
  index: (req, res) => {
    db.Products.findAll({
      include: [
        {
          association: "products_users",
        },
      ],
      order: [[db.sequelize.literal('creation_date, price'), 'desc']],  
      limit: 32,
    })
      .then((data) => {
        console.log();
        console.log('data', data);
        console.log();
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
      where: {
        [Op.or]: [
          { description: { [Op.like]: "%" + search + "%" } },
          { product_name: { [Op.like]: "%" + search + "%" } },
        ],
      },
    }).then((results) => {
      return res.render("searchResult", {
        search: results,
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
