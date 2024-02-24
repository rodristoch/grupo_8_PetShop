module.exports = (sequelize, dataTypes) => {
    let alias = 'Marca';  // Alias para la asociacion
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        marca: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: "marcas",
        timestamps: false
    }

    const Marca = sequelize.define(alias, cols, config);

    // Asociación con el modelo Producto
    Marca.associate = models => {
        Marca.hasMany(models.Producto, {  // Alias del otro modelo
            as: 'productos', // Alias para las vistas
            foreignKey: 'marca_id'
        });
    }

    return Marca
}