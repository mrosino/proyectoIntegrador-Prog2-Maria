const db = require("../database/models")
const Op = db.Sequelize.Op;
let ramoController = {
  
  index: (req, res) => {
    db.Products.findAll({
        order: [ [ 'product_name', 'ASC' ]],
        limit: 16,
        logged: res.locals.logged,
     
}) //aca pido el modelo



    .then((data)=> {
      return res.render("index", {
        products: data, //aca pido el nombre de la base de datos
        title: "Pagina de inicio",
        logged: res.locals.logged,
      });
    })
    .catch((error)=> {
      return res.send(error);
    })
  
  },


  searchResult: (req, res) => {
    let search = req.query.search; 
    res.render("searchResult", {
      search,
      title: " Pagina resultado de busquedas",
      logged: res.locals.logged,
    });
  },
  contacto: (req, res) => {
    res.render("contacto", {
      title: " Pagina muestra con quien contactar del sitio",
      logged: res.locals.logged,
    });
  },
};

module.exports = ramoController;

//find all con limite y un orden
//con mas comentarios es de los mas dificiles todavia no lo puedo hacer