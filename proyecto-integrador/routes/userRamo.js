var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require ('path');
let userController = require('../controllers/userController');


router.get('/profile/:id', userController.profile);
router.get('/emailEdit', userController.emailEdit); 
router.get('/pssEdit', userController.pssEdit); 
router.get('/register', userController.register);


const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        let directoryRoute = 'public/images/users';
        cb(null,directoryRoute);
    },
    filename: (req,file,cb)=> {
        let fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    }
}); 
const upload = multer ({
    storage: storage
});

router.post('/register',  upload.single('pp') ,userController.registered);



module.exports = router;
