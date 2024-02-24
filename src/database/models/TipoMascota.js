module.exports = (sequelize, dataTypes) => {
    let alias = 'TipoMascota';  // Alias para la asociacion
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        mascota: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };

    let config = {
        tableName: "tipos_mascota",
        timestamps: false
    }

    const TipoMascota = sequelize.define (alias, cols, config)

    // Asocaciones
    TipoMascota.associate = models => {
        // Relación uno a uno con el modelo Productos
        TipoMascota.hasMany(models.Producto, {   // Alias del otro modelo
            as: 'productos',   // Alias para controlador y vistas
            foreignKey: 'tipo_mascota_id'
        });
    };

    return TipoMascota;
};