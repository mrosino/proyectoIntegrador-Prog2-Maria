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

    // db.Users.findByPk(req.body.by)
    //   .then(() => {
    //     db.Users.update({
    //       follows: req.body.toFollow,
    //       userUpdate_date: new Date().getTime(),
    //     }).then(() => {
    //       db.Users.findByPk(req.body.toFollow).then(() => {
    //         db.Users.update({
    //           follows: req.body.by,
    //           userUpdate_date: new Date().getTime(),
    //         }).then(() => {
    //           return res.redirect(`/ramo/profile/${req.body.toFollow}`);
    //         });
    //       });
    //     });
      //})
      // .catch(function (error) {
      //   throw error;
      // });
  },

  unfollowed: (req, res) => {
    let iduser = req.params.id;

    db.Follower.findOne({
      where: {
        id_follower: iduser,
      },
    }).then(function (user) {
      db.Follower.destroy({
        where: {
          id: user.id,
        },
      }).then(function () {
        res.redirect("/profile");
      });
    });
  },
};

module.exports = followersController;
