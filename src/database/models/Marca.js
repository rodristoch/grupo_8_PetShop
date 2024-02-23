module.exports = (sequelize, DataTypes) => {
    let alias = 'Marcas' ;
    let cols = {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        marca : {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'update_at', 
        deletedAt: false 
    }

    const Marcas = sequelize.define(alias, cols, config);

    
    
    return Marcas
};