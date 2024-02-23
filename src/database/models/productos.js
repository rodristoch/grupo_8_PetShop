module.exports = (sequelize, DataTypes) => {
    let alias = 'Productos';
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
        descripcion : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        color : {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        precio : {
            type: DataTypes.DECIMAL(6,2),
            allowNull: false
        },
        imagen :{
            type: DataTypes.STRING(100), 
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
   
    const Productos = sequelize.define(alias, cols, config);

    // Asociación con el modelo TipoMascota
    Productos.associate = function(models) {
        Productos.belongsTo(models.TipoMascota, {
            foreignKey: 'tipo_mascota_id',
            as: 'tipoMascota' // Alias para la asociación
        });
    };

    // Asociación con el modelo Marca
    Productos.associate = function(models) {
        Productos.belongsTo(models.Marca, {
            foreignKey: 'marca_id',
            as: 'marca' // Alias para la asociación
        });
    };

    return Productos;
};