const express = require('express');
const router = express.Router();
const productApiController = require('../../controllers/api/productAPIController.js');

//Rutas
//Listado de productos
router.get('/', productApiController.list);
//Detalle de una producto
/* router.get('/:id', productApiController.detalle); */


module.exports = router;

