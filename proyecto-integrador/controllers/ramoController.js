const db = require("../database/models");
const Op = db.Sequelize.Op;
let ramoController = {
  index: async (req, res) => {
    let data = await db.Products.findAll({
      include: [
        {
          association: "products_users",
        },
      ],
      order: [["creation_date", "DESC"]],
      limit: 32,
    });
    return res.render("index", {
      products: data,
      title: "Pagina de inicio",
    });
  },

  searchResult: async (req, res) => {
    let search = req.query.search;
    let results = await db.Products.findAll({
      include: [
        {
          association: "products_users",
        },
      ],
      where: {
        [Op.or]: [
          { description: { [Op.like]: "%" + search + "%" } },
          { product_name:{ [Op.like]: "%" + search + "%" } },
        ],
      },
    })
      return res.render("searchResult", {
        search: results,
        lookedFor: req.query.search,
        title: "Resultado de búsquedas",
      });
  
  },

  contacto: (req, res) => {
    res.render("contacto", {
      title: " Contacto",
    });
  },
};

module.exports = ramoController;
