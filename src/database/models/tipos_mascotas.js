module.exports = (sequelize, DataTypes) => {
    let alias = 'tipos_mascotas' ;
    let cols = {
        id : {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKEy: true,
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

    const tiposMarcas = sequelize.define (alias, cols, config)

    // Relación uno a uno con el modelo Productos
    tiposMarcas.hasone(model.producto, {
        as: 'productos',
        foreignKey: 'tipo_mascota_id'
    })

    return tipos_marcas
};