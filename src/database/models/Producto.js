module.exports = (sequelize, DataTypes) => {
    let alias = 'Productos';
    let cols = {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcion : {
            type: DataTypes.TEXT,
        },
        color : {
            type: DataTypes.STRING(50),
        },
        precio : {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        imagen :{
            type: DataTypes.STRING(100), 
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
        tableName: "productos",
        timestamps: false, 
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