module.exports = (sequelize, DataTypes) => {
    
    let alias = 'Products';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        created_by: {
            type: DataTypes.INTEGER
        },

        image: {
            type: DataTypes.STRING
        },
        product_name: {
            type: DataTypes.STRING
        },
        creation_date: {
            type: DataTypes.DATE,

        },
        description: {
            type: DataTypes.INTEGER
        },
        update_date: {
            type: DataTypes.DATE,
        },
        price:{
            type:DataTypes.INTEGER
        }
    }
    let config = {
        tableName: "products",
        timestamps: false,
    }
    const Products = sequelize.define(alias, cols, config);

    Products.associate = function (models) {
        Products.belongsTo(models.Users, {
            as: "products_users",
            foreignKey: "created_by"
        });

        Products.hasMany(models.Comments, {
            as: "products_comments",
            foreignKey: "product_id"
        });

    }



    return Products;
}

