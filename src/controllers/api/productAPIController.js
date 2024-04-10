const path = require("path")
const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


const productAPIController = {

    'list': (req, res) => {
        db.Producto.findAll({
            include: ["tipos_mascota", "descuentos", "categorias", "marcas"]
        })
        .then(products => { 
            
            return res.status(200).json({
                meta: {
                    link: 'http://localhost:3100/api/productos',
                    status : 200,
                    total: products.length,
                },
                data: products
            })
        })
    },

    "detail": (req, res) => {
        db.Producto.findByPk(req.params.id,
            {
                include: ["tipos_mascota", "descuentos", "categorias", "marcas"]
            })
            .then(product => {

                return res.status(200).json({
                    meta: {
                        link: 'http://localhost:3100/api/productos/:id',
                        status: 200,
                        /* total: product.length */
                    },
                    data: product
                })      
            });
    }
}

module.exports = productAPIController;