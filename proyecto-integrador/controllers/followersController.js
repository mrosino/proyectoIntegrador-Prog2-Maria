const db = require("../database/models");


let followersController = {

  followed: (req, res) => {
    db.Follower.create({
      followed_by: req.body.by,
      follows: req.body.toFollow,
    })
      .then(() => {
        req.flash('success', "Siguiendo!")
        res.redirect(`/ramo/profile/${req.body.toFollow}`);
      })
      .catch((error) => {
        throw error;
      });
  },

  unfollowed: (req, res) => {
    db.Follower.destroy({
      where: { followed_by: req.body.by, follows: req.body.toFollow },
    })
      .then(() => {
        req.flash('success', "Ya no seguis a esta cuenta")
        res.redirect(`/ramo/profile/${req.body.toFollow}`);
      })
      .catch((error) => {
        throw error;
      });
  },
};

module.exports = followersController;
