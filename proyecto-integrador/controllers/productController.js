const db = require("../database/models")
const Op = db.Sequelize.Op;
let productController = {
  products: (req, res) => {
    let id = req.params.id;  
    
      db.Products.findByPk(id)       

  .then((data)=> {
    console.log(data);
    return res.render("products", {
      products: data.dataValues, //aca pido el nombre de la base de datos
      title: "Pagina de productos",
      logged: true,
    });
  })
  .catch((error)=> {
    return res.send(error);
  })



  },
  productAdd: (req, res) => {
    res.render("productAdd", {
      title: "Pagina de agregar producto ",
      logged: true,
    });
  },
  productEdit: (req, res) => {
    res.render("productEdit", {
      title: "Pagina de editar producto ",
      logged: true,
    });
  },
};
module.exports = productController;

  
// index: (req, res) => {
//   db.Products.findAll({
//       order: [ [ 'product_name', 'ASC' ]],
//       limit: 16
   
// }) //aca pido el modelo



//   .then((data)=> {
//     return res.render("index", {
//       products: data, //aca pido el nombre de la base de datos
//       title: "Pagina de inicio",
//       logged: false,
//     });
//   })
//   .catch((error)=> {
//     return res.send(error);
//   })

// },
