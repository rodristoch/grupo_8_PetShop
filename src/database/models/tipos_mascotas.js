module.exports = (sequelize, DataTypes) => {
    let alias = 'tipos_mascotas' ;
    let cols = {
        id : {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        mascota : {
            type:DataTypes.STRING(50),
            allowNull: false
        }
    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'update_at', 
        deletedAt: false 
    }

    const TiposMarcas = sequelize.define (alias, cols, config)

    // Asocaciones
    TiposMarcas.associate = function(models) {
        // Relación uno a uno con el modelo Productos
        TiposMarcas.hasOne(models.Producto, {
            as: 'productos',
            foreignKey: 'tipo_mascota_id'
        });
    };

    return TiposMarcas;
};