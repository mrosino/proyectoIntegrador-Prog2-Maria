module.exports = (sequelize, DataTypes) => {
    let alias = 'Follower';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: DataTypes.INTEGER
        }, 
        followed_by: {
            type: DataTypes.INTEGER,
        } ,
        follows: {
            type: DataTypes.INTEGER,
        } 
    }
    let config = {
        tableName: "follower",
        timestamps: false, 

    }
    const Follower = sequelize.define(alias, cols, config); 

    Follower.associate = function (models) {
        Follower.belongsToMany(models.Users, {
            as: "followed_users", 
            through: "follower",
            foreignKey: "followed_by",
            otherKey: "followed_by",
            timestamps:false

        });  
        Follower.belongsToMany(models.Users, {
            as: "follows_users", 
            through: "follower",
            foreignKey: "follows",
            otherKey: "follows",
            timestamps:false

        });  
     
    }

    return Follower; 
}