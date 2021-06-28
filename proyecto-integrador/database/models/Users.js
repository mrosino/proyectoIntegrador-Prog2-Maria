module.exports = (sequelize, DataTypes) => {
  let alias = "Users";
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    province: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    phone: {
      type: DataTypes.INTEGER,
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
  };
  let config = {
    tableName: "users",
    timestamps: false,
  };
  const Users = sequelize.define(alias, cols, config);

  Users.associate = function (models) {
    Users.hasMany(models.Comments, {
      as: "users_comments",
      foreignKey: "creator_id",
    });

    Users.hasMany(models.Products, {
      as: "users_products",
      foreignKey: "created_by",
    });

    Users.hasMany(models.Follower, {
      as: "users_followed",
      foreignKey: "followed_by",
    });
    Users.hasMany(models.Follower, {
      as: "users_follows",
      foreignKey: "follows",
    });
  };

  return Users;
};
