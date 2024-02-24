module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';  // Alias para la asociacion
    cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        categoria: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        tableName: "categorias",
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config);

    // Relación muchos a muchos con la tabla intermedia producto_categoria
    Categoria.associate = models => {
        Categoria.belongsToMany(models.Producto, {  // Alias del otro modelo
            as: 'productos',
            through: 'producto_categoria',
            foreignKey: 'categoria_id',
            otherKey: 'producto_id'
        });
    };

    return Categoria;
};