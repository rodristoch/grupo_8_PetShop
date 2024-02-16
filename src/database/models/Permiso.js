module.exports = (sequelize, dataTypes) => {
    let alias = 'Permiso'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        }
    };
    let config = {
        tableName: "permisos",
        timestamps: false
    }
    const Permiso = sequelize.define(alias,cols,config);

    Permiso.associate = function (models) {
        Permiso.belongsTo(models.Usuario, { 
            as: "usuarios",
            foreignKey: "permiso_id"
        })
    }

    return Permiso
};