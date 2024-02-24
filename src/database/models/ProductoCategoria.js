module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductoCategoria';  // Alias para la asociacion
    cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        producto_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        categoria_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "producto_categoria",
        timestamps: false
    }

    const ProductoCategoria = sequelize.define(alias, cols, config);

    
    ProductoCategoria.associate = models => {
        // Asociación con el modelo Producto
        ProductoCategoria.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        });

        // Asociación con el modelo Categoria
        ProductoCategoria.belongsTo(models.Categoria, {
            as: 'categoria',
            foreignKey: 'categoria_id'
        });
    };
    
    return ProductoCategoria;
};