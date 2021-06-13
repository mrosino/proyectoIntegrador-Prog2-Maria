module.exports = (sequelize, DataTypes) => {
    //parametros definidos desde el otro archivo, y los utilizamos cuando necesitamos
let alias = 'Users';
let cols = {
    id: { 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    province: {
        type: DataTypes.STRING
    },
    document: {
        type: DataTypes.INTEGER
    },
    gender: {
        type: DataTypes.STRING
    },
    birthday: {
        type: DataTypes.DATE
    },
    phone: {
        type: DataTypes.INTEGER
    },
    registration_date: {
        type: DataTypes.DATE, 
    },
    userUpdate_date: {
        type: DataTypes.DATE, 
    },
    profile_pic: {
        type: DataTypes.STRING, 
    },
    follows: {
        type: DataTypes.INTEGER
    },
    followed_by: {
        type: DataTypes.INTEGER
    }

}
let config = {
    tableName: "users",
    timestamps: false,
}
const Users = sequelize.define(alias, cols, config);

Users.associate = function (models) {
    Users.hasMany(models.Comments, {
        as: "users_comments",
        foreignKey: "creator_id"
    });
 
    Users.hasMany(models.Products, {
        as: "users_products",
        foreignKey: "created_by"
    });

    Users.belongsToMany(models.Follower, {
        as: "users_followed", 
        through: "follower",
        foreignKey: "followed_by",
        otherKey: "followed_by",
        timestamps:false

    });  
    Users.belongsToMany(models.Follower, {
        as: "users_follows", 
        through: "follower",
        foreignKey: "follows",
        otherKey: "follows",
        timestamps:false

    });  
  
 
}



return Users; 
}


