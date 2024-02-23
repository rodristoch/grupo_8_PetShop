module.exports =(sequelize, DataTypes) => {
    let alias = 'Productos_descuentos';
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
        descuentosId : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    // Definición del modelo
    const ProductoCategoria = sequelize.define(alias, cols);

    // Se define la relación entre productos y categorías
    ProductoCategoria.associate = function(models) {

        // Relación con la tabla de productos
        ProductoCategoria.belongsTo(models.Productos, {
            foreignKey: 'productoId',
            as: 'productos'
        });

        // Relación con la tabla de categorías
        ProductoCategoria.belongsTo(models.Categorias, {
            foreignKey: 'descuentosId',
            as: 'descuentos'
        });
    };

    return ProductoCategoria
}