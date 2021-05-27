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

}
let config = {
    tableName: "users", //x ej, en alias use con mayusculas, aca aclaro el verdadero nombre en la tabla (la de phpmyadmin)
    timestamps: true, //sino la base de datos me suma dos columnas de created by y noseque mas
}
const Users = sequelize.define(alias, cols, config);
return Users; //lo que retorno en la ruta/controlador

}


