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
        timestamps: false
    }
   
    const Producto = sequelize.define(alias, cols, config);

        Producto.associate = function (models) {
            // Asociación con el modelo Tipo_Mascota
            Producto.belongsTo(models.TipoMascota, {
                foreignKey: 'tipo_mascota_id',
                as: 'tipos_mascota'
            });
    
            // Asociación con el modelo Marca
            Producto.belongsTo(models.Marca, {
                foreignKey: 'marca_id',
                as: 'marcas'
            });
    
            // Asociación con tabla intermedia producto_categoria
            Producto.belongsToMany(models.Categoria, {
                as: 'categorias',
                through: 'producto_categoria',
                foreignKey: 'producto_id',
                otherKey: 'categoria_id'
            });
    
            // Asociación con tabla intermedia producto_descuento
            Producto.belongsToMany(models.Descuento, {
                as: 'descuentos',
                through: 'producto_descuento',
                foreignKey: 'producto_id',
                otherKey: 'descuento_id'
            });
    };


    return Producto;
};