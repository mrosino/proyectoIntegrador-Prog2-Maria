module.exports = (sequelize, DataTypes) => {
    //parametros definidos desde el otro archivo, y los utilizamos cuando necesitamos
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

}
let config = {
    tableName: "products", //x ej, en alias use con mayusculas, aca aclaro el verdadero nombre en la tabla (la de phpmyadmin)
    timestamps: false,
}
const Products = sequelize.define(alias, cols, config);
return Products; //lo que retorno en la ruta/controlador

}

//agregar columna activo true or false, y usarlo para el partials pausado, y dsps hacer boton que cambie la propiedad.