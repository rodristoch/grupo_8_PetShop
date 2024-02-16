module.exports = (sequelize, Datatypes) => {
    let alias = 'descuentos';
    cols = {
        id : {
            type: Datatypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre : {
            type: Datatypes.STRING(100),
            allowNull: false
        },
        descripcion : {
            type: Datatypes.TEXT,
            allowNull: false
        },
        fechaInicio : {
            type: Datatypes.DATE ,
            allowNull: false,
        },
        fechaFinal : {
            type: Datatypes.DATE ,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'update_at', 
        deletedAt: false 
    }

    const categorias = sequelize.define (alias, cols, config);

    const Categorias = sequelize.define(alias, cols, config);

    // Relación muchos a muchos con la tabla intermedia producto_categoria
    Categorias.belongsToMany(models.productos, {
        through: 'producto_descuento',
        foreignKey: 'descuentosId',
        otherKey: 'productoId',
        as: 'productos'
    });

}