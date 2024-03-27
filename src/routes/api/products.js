const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController.js');

//Rutas
//Listado de productos
router.get('/', productAPIController.list);  /* localhost:3100/api/productos */
//Detalle de una producto
router.get('/:id', productAPIController.detail);  /* localhost:3100/api/productos/id */


module.exports = router;

