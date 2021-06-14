const db = require("../database/models");
const Op = db.Sequelize.Op;

let followersController = {
 
  followed: (req, res) => {
   
    db.Follower.create({
      followed_by: req.body.by,
      follows: req.body.toFollow,
    })
    .then(()=>{      
    return res.redirect(`/ramo/profile/${req.body.toFollow}`);
  })
  .catch((error) => {
    throw error;
  });
  },

  unfollowed: (req, res) => {
    
    db.Follower.destroy({
      where: { followed_by: req.body.by, follows: req.body.toFollow },
    })
    .then(()=>{

      return res.redirect(`/ramo/profile/${req.body.toFollow}`);
    })
    .catch((error) => {
      throw error;
    });
    
  },
};

module.exports = followersController;
