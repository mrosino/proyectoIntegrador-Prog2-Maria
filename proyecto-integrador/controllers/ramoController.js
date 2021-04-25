let ramoController = {
  index: (req, res) => {
    res.render("index", {
      title: "Pagina de inicio",
      logged: false,
    });
  },

  searchResult: (req, res) => {
    let search = req.query.search;
    res.render("searchResult", {
      search,
      title: " Pagina resultado de busquedas",
      logged: false,
    });
  },
  contacto: (req, res) => {
    res.render("contacto", {
      title: " Pagina muestra con quien contactar del sitio",
      logged: false,
    });
  },
};

module.exports = ramoController;
