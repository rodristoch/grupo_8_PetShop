module.exports = (sequelize, Datatypes) => {
    let alias = 'Categorias';
    cols = {
        id : {
            type: Datatypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        categoria : {
            type: Datatypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'update_at', 
        deletedAt: false 
    }



    const Categorias = sequelize.define(alias, cols, config);

    // Relación muchos a muchos con la tabla intermedia producto_categoria
    Categorias.associate = function(models) {
        Categorias.belongsToMany(models.Productos, {
            through: 'producto_categoria',
            foreignKey: 'categoriaId',
            otherKey: 'productoId',
            as: 'productos'
        });
    };

    return Categorias;
};