const db = require("../database/models");
const Op = db.Sequelize.Op;

let followersController ={

    follow: (req, res) => {
        let iduser = req.params.id

        let followe ={
            id_follower: iduser
        }

        db.Follower.create(followe)
        .then(function() {
            res.redirect("/profile"); 
        })
    }, 

    unfollow: (req, res) => {
        let iduser = req.params.id

        db.Follower.findOne ({
            where: {
                id_follower: iduser
            }
        
        }).then(function(user){
            db.Follower.destroy({
                where: {
                    id: user.id
                }
            })
            .then(function() {
                res.redirect("/profile"); 
            })
        })
    }
}



module.exports = followersController; 