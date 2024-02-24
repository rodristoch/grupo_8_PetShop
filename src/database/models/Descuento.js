module.exports = (sequelize, dataTypes) => {
    let alias = 'Descuento';  // Alias para la asociacion
    cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: dataTypes.STRING(100),
        },
        descripcion: {
            type: dataTypes.TEXT,
        },
        fecha_inicio: {
            type: dataTypes.DATE,
        },
        fecha_final: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "descuentos",
        timestamps: false,  
    };

    // Definición del modelo
    const Descuento = sequelize.define(alias, cols, config);

    // Relación muchos a muchos con la tabla intermedia producto_descuento
    Descuento.associate = (models) => {
        Descuento.belongsToMany(models.Producto, {   // Alias del otro modelo
            as: 'productos',
            through: 'producto_descuento',
            foreignKey: 'descuento_id',
            otherKey: 'producto_id'
        });
    };

    return Descuento;
};