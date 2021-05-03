var express = require('express');
var router = express.Router();

let ramoController = require('../controllers/ramoController');
let db = require('../database/models')

router.get('/', ramoController.index);

router.get('/searchResult', ramoController.searchResult);

router.get('/contacto', ramoController.contacto);

router.get('/demo', function(req, res) {
    let usuario = db.Users.findAll()
    .then((result) => {
       res.send(result) 
    })
    .catch((error) => {
        res.send(error) 
    })
});
  

module.exports = router;

