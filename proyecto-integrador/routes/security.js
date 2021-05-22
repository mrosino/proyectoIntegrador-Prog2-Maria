var express = require('express');
var router = express.Router();
const securityController = require('../controllers/securityController')

router.get('/login', securityController.login);
router.post('/login', securityController.authenticate);
router.post('/logout', securityController.logout);
router.post('/editedUser', securityController.editedUser);
router.post('/editedPass', securityController.editedPass);

module.exports = router;