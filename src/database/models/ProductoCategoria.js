module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductoCategoria';  // Alias para la asociacion
    cols = {
        id : {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        producto_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        categoria_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "producto_categoria",
        timestamps: false
    }



    const ProductoCategoria = sequelize.define(alias, cols, config);

   // Asociación con el modelo Producto
   ProductoCategoria.associate = function (models) {
    ProductoCategoria.belongsTo(models.Producto, {
        foreignKey: 'producto_id',
        as: 'producto',
        });
    };

// Asociación con el modelo Categoria
    ProductoCategoria.associate = function (models) {
    ProductoCategoria.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id',
        as: 'categoria',
        });
    };

    return ProductoCategoria;
};