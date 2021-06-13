const db = require("../database/models");
const Op = db.Sequelize.Op;




let followersController = {
follow:(req,res) =>{
    db.Follower.findAll(by)
    return res.redirect(`/ramo/profile/${toFollow}`)
},
unfollow:(req,res) =>{
    db.Follower.findAll(by)
    return res.redirect(`/ramo/profile/${toFollow}`)
},
  followed: (req, res) => {
    db.Follower.Create({
      followed_by: by,
      follows: toFollow,
    });

    db.Users.findByPk(by)
    .then(() => {
      db.Users.Update({
        follows: toFollow,
        update_date: new Date().getTime(),
      }).then(() => {
        db.Users.findByPk(toFollow)
        .then(() => {
          db.Users.Update({
            follows: by,
            update_date: new Date().getTime(),
          })
          .then(()=>{
            return res.redirect(`/ramo/profile/${toFollow}`)
          })
        })
      })
    })
    .catch(function (error) {
        throw error;
      });
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
