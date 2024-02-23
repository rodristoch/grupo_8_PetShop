module.exports = (sequelize, dataTypes) => {
    let alias = 'Descuento';  // Alias para la asociacion
    cols = {
        id : {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre : {
            type: dataTypes.STRING(100),
        },
        descripcion : {
            type: dataTypes.TEXT,
        },
        fechaInicio : {
            type: dataTypes.DATE,
        },
        fechaFinal : {
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
    Descuento.associate = function(models) {
        Descuento.belongsToMany(models.Producto, {   // Alias del otro modelo
            through: 'producto_descuento',
            foreignKey: 'descuentosId',
            otherKey: 'productoId',
            as: 'productos'
        });
    };

    return Descuento;
};