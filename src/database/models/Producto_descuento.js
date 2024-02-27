module.exports = (sequelize, dataTypes) => {
    const ProductoDescuento = sequelize.define('ProductoDescuento', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        producto_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Producto', // Nombre de la tabla a la que hace referencia
                key: 'id'          // Nombre de la columna en la tabla referenciada
            }
        },
        descuento_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Descuento', // Nombre de la tabla a la que hace referencia
                key: 'id'           // Nombre de la columna en la tabla referenciada
            }
        }
    }, {
        tableName: 'producto_descuento',
        timestamps: false
    });

    return ProductoDescuento;
};
