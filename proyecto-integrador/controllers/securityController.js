const db = require("../database/models");
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
var securityController = {
  login: (req, res) => {
    
    return (
      res.render(("security/login"),{
        failed: req.query.failed,
        logged: false,
      })
        
      
      
    );
  },
  authenticate: (req, res) => {
    db.Users.findOne({ where: { email: req.body.email } })
      .then((user) => {
        
        if (bcrypt.compareSync(req.body.password,user.password)){
       
          req.session.user = user;
          
          return res.redirect(`/profile/${user.id}`);
          
        }        
        res.redirect("/login?failed=1");
        
      })
      .catch((error) => {
        
        res.redirect("/login?failed=1");
      });
  },
};

module.exports = securityController;
