var express = require('express');
var router = express.Router();
const securityController = require('../controllers/securityController')

router.get('/login', securityController.login);
router.post('/login', securityController.authenticate);
router.post('/logout', securityController.logout);
router.post('/editedUser', securityController.editedUser);
router.post('/editedPass', securityController.editedPass);


const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        let directoryRoute = 'public/images/users';
        cb(null,directoryRoute);
    },
    filename: (req,file,cb)=> {
        let fileName = Date.now() + path.extname(file.originalname) + '-' + file.fieldname;
        cb(null, fileName)
    }
}); 
const upload = multer ({
    storage: storage
});

router.post('/editedImagen', upload.single('pp'), securityController.editedImagen);


module.exports = router;