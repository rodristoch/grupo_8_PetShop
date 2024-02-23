module.exports = (sequelize, DataTypes) => {
    let alias = 'tipos_mascotas' ;
    let cols = {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        mascota : {
            type:DataTypes.STRING(50),
            allowNull: false
        }
    };

    let config = {
        tableName: "tipos_mascota",
        timestamps: false
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