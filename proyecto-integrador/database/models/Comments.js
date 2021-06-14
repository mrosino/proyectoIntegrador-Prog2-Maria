const Users = require("./Users");

module.exports = (sequelize, DataTypes) => {
    //parametros definidos desde el otro archivo, y los utilizamos cuando necesitamos
    let alias = 'Comments';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        creator_id: {
            type: DataTypes.INTEGER
        },
        content: {
            type: DataTypes.STRING
        },
        creation_date: {
            type: DataTypes.DATE,
        }
    }
    let config = {
        tableName: "comments",
        timestamps: false,
    }
    const Comments = sequelize.define(alias, cols, config);

    Comments.associate = function (models) {
        Comments.belongsTo(models.Users, {
            as: "comments_users",
            foreignKey: "creator_id"
        });

        Comments.belongsTo(models.Products, {
            as: "comments_products",
            foreignKey: "product_id"
        });

    }



    return Comments;
}
