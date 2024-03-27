const express = require('express');
const router = express.Router();
const categoryAPIController = require('../../controllers/api/categoryAPIController.js');

//Rutas
//Listado de categorias
router.get('/', categoryAPIController.list);  /* localhost:3100/api/categorias */
//Detalle de categoria
router.get('/:id', categoryAPIController.detail);  /* localhost:3100/api/categorias/id */
//Productos por categoria
router.get('/:id/productos', categoryAPIController.categoryProducts);  /* localhost:3100/api/categorias/id/productos */


module.exports = router;