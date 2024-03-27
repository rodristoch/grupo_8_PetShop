const path = require("path")
const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


const categoryAPIController = {

    'list': (req, res) => {
        db.Categoria.findAll({
            include: ["productos"]
        })
        .then(categories => { 
            
            return res.status(200).json({
                meta: {
                    link: 'http://localhost:3100/api/categorias',
                    status : 200,
                    total: categories.length,
                },
                data: categories
            })
        })
    },

    "detail": (req, res) => {
        db.Categoria.findByPk(req.params.id)
            .then(category => {

                return res.status(200).json({
                    meta: {
                        link: 'http://localhost:3100/api/categorias/:id',
                        status: 200,
                        total: category.length
                    },
                    data: category
                })      
            });
    },

    "categoryProducts": (req, res) => {
        db.Categoria.findByPk(req.params.id,
            {
                include: ["productos"]
            })
            .then(category => {

                return res.status(200).json({
                    meta: {
                        link: 'http://localhost:3100/api/categorias/:id/productos',
                        status: 200,
                        total: category.length
                    },
                    data: category
                })      
            });
    },
}

module.exports = categoryAPIController;