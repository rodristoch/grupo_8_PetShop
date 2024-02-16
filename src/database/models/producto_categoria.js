module.exports =(sequelize, DataTypes) => {
    let alias = 'producto_categoria';
    let cols = {
        id : {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        productoId : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categoriaId : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    const productoCategoria = sequelize.define(alias, cols)

    //Se define la relación entre productos y categorias
    productoCategoria.associate = function (models) {

        //Relación con tabla de productos
        productoCategoria.belongsTo(models.productos, {
            foreignKey: 'productoID',
            as: 'productos' 
        });

        //Relación con la tabla de categorias
        productoCategoria.belongsTo(model.categorias, {
            foreignKey: 'categoriaID',
            as: 'categorias'
        });      
    };

    return productoCategoria
}