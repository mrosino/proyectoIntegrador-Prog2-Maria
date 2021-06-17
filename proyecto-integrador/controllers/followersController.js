const db = require("../database/models");

let followersController = {
  followed: async (req, res) => {
    let existance = await db.Follower.findOne({
      where: { id: req.body.toFollow },
    })
if (!existance) {
  await db.Follower.create({
    followed_by: req.body.by,
    follows: req.body.toFollow,
  });

  req.flash("success", "Siguiendo!");
  res.redirect(`/ramo/profile/${req.body.toFollow}`);
}

   
  },

  unfollowed: async (req, res) => {
    await db.Follower.destroy({
      where: { followed_by: req.body.by, follows: req.body.toFollow },
    });
    req.flash("danger", "Ya no seguis a esta cuenta");
    res.redirect(`/ramo/profile/${req.body.toFollow}`);
  },
};

module.exports = followersController;
