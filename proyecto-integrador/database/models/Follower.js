module.exports = (sequelize, DataTypes) => {
    let alias = 'Follower';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: DataTypes.INTEGER
        }, 
        id_follower: {
            type: DataTypes.INTEGER,
        } 
    }
    let config = {
        tableName: "follower",
        timestamps: false, 

    }
    const Follower = sequelize.define(alias, cols, config); 

    Follower.associate = function (models) {
        Follower.belongsTo(models.Users, {
            as: "follower_users", 
            foreignKey: "id_follower"
        });  
    }

    return Follower; 
}