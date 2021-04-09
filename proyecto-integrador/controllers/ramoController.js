
let ramoController= {
    index: (req, res) => {
        res.render("index", { title:"Pagina de inicio"}) 
    },
    
    searchResult:(req, res) => {
        res.render("searchResult", { title:" Pagina resultado de busquedas"})
    },

}

module.exports = ramoController;