module.exports = (sequelize, dataTypes) => {
    let alias = 'Permiso';  // Alias para la asociacion
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        tableName: "permisos",
        timestamps: false
    }
    const Permiso = sequelize.define(alias,cols,config);

    Permiso.associate = models => {
        Permiso.hasMany(models.Usuario, {  //un Usuario tiene un permiso, pero un permiso tiene varios usuarios
            as: "usuarios",      // Alias para controlador y vistas
            foreignKey: "permiso_id"
        })
    }

    return Permiso
};