const db = require("../database/models");
const Op = db.Sequelize.Op;
let ramoController = {
  index: async (req, res) => {
    let user_followers;
    let data = await db.Products.findAll({
      include: [
        {
          association: "products_users",
        },
      ],
      order: [["creation_date", "DESC"]],
      limit: 8,
    });
    let info = await db.Products.findAll({
      include: [
        {
          association: "products_comments",
        },
        {
          association: "products_users",
        },
      ],
      order: [["products_comments", "creation_date", "DESC"]],
      limit: 8,
    });
    if (req.session.user) {
      user_followers = await db.Follower.findAll({
        where: { followed_by: req.session.user.id },
        include: [
          {
            association: "follows_users",
            include: [{ association: "users_products", limit: 1, }],
          },
        ],
        limit: 4,
      });

    }
    return res.render("index", {
      user_followers,
      products_cmt: info,
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
          { product_name: { [Op.like]: "%" + search + "%" } },

        ],
      },
    });
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
