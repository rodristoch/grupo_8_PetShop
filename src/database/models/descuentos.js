module.exports = (sequelize, DataTypes) => {
    let alias = 'Descuentos';
    cols = {
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
        fechaInicio : {
            type: DataTypes.DATE ,
            allowNull: false,
        },
        fechaFinal : {
            type: DataTypes.DATE ,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at', 
        deletedAt: false 
    };

    // Definición del modelo
    const Descuentos = sequelize.define(alias, cols, config);

    // Relación muchos a muchos con la tabla intermedia producto_descuento
    Descuentos.associate = function(models) {
        Descuentos.belongsToMany(models.Productos, {
            through: 'producto_descuento',
            foreignKey: 'descuentosId',
            otherKey: 'productoId',
            as: 'productos'
        });
    };

    return Descuentos;
};