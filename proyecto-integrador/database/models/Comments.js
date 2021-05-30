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
    },
    update_date: {
        type: DataTypes.DATE, 
    }
 

}
let config = {
    tableName: "comments", //x ej, en alias use con mayusculas, aca aclaro el verdadero nombre en la tabla (la de phpmyadmin)
    timestamps: false, 
}
const Comments = sequelize.define(alias, cols, config);
return Comments; //lo que retorno en la ruta/controlador

}
