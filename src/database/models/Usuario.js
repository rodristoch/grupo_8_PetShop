module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';  // Alias para la asociacion
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(255),
        },
        permiso_id: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    const Usuario = sequelize.define(alias,cols,config);

    Usuario.associate = models => {
        Usuario.belongsTo(models.Permiso, {   //un Usuario tiene un permiso, pero un permiso tiene varios usuarios
            as: "permisos",   // Alias para controlador y vistas
            foreignKey: "permiso_id"
        })
    }

    return Usuario
};