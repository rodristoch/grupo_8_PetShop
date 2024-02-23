module.exports = (sequelize, DataTypes) => {
    let alias = 'Descuentos';
    cols = {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre : {
            type: DataTypes.STRING(100),
        },
        descripcion : {
            type: DataTypes.TEXT,
        },
        fechaInicio : {
            type: DataTypes.DATE,
        },
        fechaFinal : {
            type: DataTypes.DATE,
        }
    };
    let config = {
        tableName: "descuentos",
        timestamps: false,  
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