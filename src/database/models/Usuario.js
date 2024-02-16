module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        apellido: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        email: {
            type: dataTypes.VARCHAR(150),
            allowNull: false
        },
        password: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
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

    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Permiso, { 
            as: "permisos",
            foreignKey: "permiso_id"
        })
    }

    return Usuario
};