module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';  // Alias para la asociacion
    cols = {
        id : {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        categoria : {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        tableName: "categorias",
        timestamps: false,
    }



    const Categoria = sequelize.define(alias, cols, config);

    // Relación muchos a muchos con la tabla intermedia producto_categoria
    Categoria.associate = function(models) {
        Categoria.belongsToMany(models.Producto, {  // Alias del otro modelo
            through: 'producto_categoria',
            foreignKey: 'categoriaId',
            otherKey: 'productoId',
            as: 'productos'
        });
    };

    return Categoria;
};