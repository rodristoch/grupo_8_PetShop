const path = require("path")
const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const usersAPIController = {
    'list': (req, res) => {
        db.Usuario.findAll({
            include: ["permisos"]
        })
        .then(users => { 
            
            return res.status(200).json({
                meta: {
                    link: 'http://localhost:3100/api/usuarios',
                    status : 200,
                    total: users.length,
                },
                data: users
            })
        })
    },

    "detalle": (req, res) => {
        db.Usuario.findByPk(req.params.id,
            {
                include: ["permisos"]
            })
            .then(user => {

                return res.status(200).json({
                    meta: {
                        link: 'http://localhost:3100/api/usuarios/:id',
                        status: 200,
                        total: user.length
                    },
                    data: user
                })      
            });
    }

}

module.exports = usersAPIController;