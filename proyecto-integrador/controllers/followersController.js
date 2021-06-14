const db = require("../database/models");
const Op = db.Sequelize.Op;

let followersController = {
  follow: (req, res) => {
    db.Follower.findAll(req.body.by);
    return res.redirect(`/ramo/profile/${req.body.toFollow}`);
  },
  unfollow: (req, res) => {
    db.Follower.findAll(req.body.by);
    return res.redirect(`/ramo/profile/${req.body.toFollow}`);
  },
  followed: (req, res) => {
    db.Follower.create({
      followed_by: req.body.by,
      follows: req.body.toFollow,
    });
    return res.redirect(`/ramo/profile/${req.body.toFollow}`);

  },

  unfollowed: (req, res) => {
    db.Follower.destroy({
      followed_by: req.body.by,
      follows: req.body.toFollow,
    });
    return res.redirect(`/ramo/profile/${req.body.toFollow}`);
   
  },
};

module.exports = followersController;
