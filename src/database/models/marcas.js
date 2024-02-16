module.exports = (sequelize, DataTypes) => {
    let alias = 'marcas' ;
    let cols = {
        id : {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        marca: {
            type : DataTypes.STING(100),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'update_at', 
        deletedAt: false 
    }

    const marcas = sequelize.define(alias, cols, config);

    // Relación uno a uno con del modelo Productos
    marcas.hasone(models.products, {
        as: 'productos',
        foreignKey: 'marca_id'
    });
    
    return marcas
};