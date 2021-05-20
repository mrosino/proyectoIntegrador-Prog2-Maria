var express = require('express');
var router = express.Router();
const securityController = require('../controllers/securityController')

router.get('/login', securityController.login);
router.post('/login', securityController.authenticate);
router.post('/logout', securityController.logout);

module.exports = router;