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
        Follower.hasMany(models.Users, {
            as: "followed_users",
            foreignKey: "followed_by"
        });
        Follower.hasMany(models.Users, {
            as: "follows_users",
            foreignKey: "follows"
        });
    
    }

    return Follower; 
}