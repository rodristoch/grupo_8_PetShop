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
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/productos'
                },
                data: products
            }
                res.json(respuesta);
        })
    }



}

module.exports = productAPIController;