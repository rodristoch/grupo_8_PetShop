module.exports = (sequelize, DataTypes) => {
    let alias = 'productos';
    let cols = {
        id : {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        precio : {
            type: DataTypes.DECIMAL(6,2),
            allowNull: false
        },
        color : {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        descripcion : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tipo_mascota_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        marca_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'update_at', 
        deletedAt: false 
    }
   
    const productos = sequelize.define(alias, cols, config);

    // Relación de uno a muchos con el modelo TipoMascota
    productos.belongsTo(TipoMascota, {
        foreignKey: 'tipo_mascota_id',
        as: 'tipoMascota' // Alias para la asociación
    });

    // Relación de uno a muchos con el modelo Marca
    productos.belongsTo(Marca, {
        foreignKey: 'marca_id',
        as: 'marca' // Alias para la asociación
    });

    return productos;
};
