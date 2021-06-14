var express = require('express');
var router = express.Router();
let db = require('../database/models');

let followersController = require('../controllers/followersController'); 


router.post('/follow', followersController.followed); 
router.post('/unfollow', followersController.unfollowed); 


module.exports = router;
