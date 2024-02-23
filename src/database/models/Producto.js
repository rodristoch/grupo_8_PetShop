module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';  // Alias para la asociacion
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre : {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion : {
            type: dataTypes.TEXT,
        },
        color : {
            type: dataTypes.STRING(50),
        },
        precio : {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        imagen :{
            type: dataTypes.STRING(100), 
        },
        tipo_mascota_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        marca_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false, 
    }
   
    const Producto = sequelize.define(alias, cols, config);

    // Asociación con el modelo TipoMascota
    Producto.associate = function(models) {
        Producto.belongsTo(models.TipoMascota, {  // Alias del otro modelo
            foreignKey: 'tipo_mascota_id',
            as: 'tipoMascota' // Alias para las vistas
        });
    };

    // Asociación con el modelo Marca
    Producto.associate = function(models) {
        Producto.belongsTo(models.Marca, {  // Alias del otro modelo
            foreignKey: 'marca_id',
            as: 'marca' // Alias para las vistas
        });
    };

    return Producto;
};