var express = require('express');
var router = express.Router();
let db = require('../database/models');

let followersController = require('../controllers/followersController'); 

router.post('/follow/:id,', followersController.follow); 
router.post('/unfollow/:id', followersController.unfollow); 


module.exports = router;
