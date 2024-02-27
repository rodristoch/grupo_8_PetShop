module.exports = (sequelize, DataTypes) => {
    const ProductoCategoria = sequelize.define('ProductoCategoria', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Producto', // Nombre del modelo referenciado
                key: 'id'          // Clave primaria del modelo referenciado
            }
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categoria', // Nombre del modelo referenciado
                key: 'id'           // Clave primaria del modelo referenciado
            }
        }
    }, {
        tableName: 'producto_categoria',
        timestamps: false
    });

    return ProductoCategoria;
};
