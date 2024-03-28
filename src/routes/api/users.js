const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController.js');

//Rutas
//Listado de usuarios
router.get('/', usersAPIController.list);
//Detalle de una usuario
router.get('/:id', usersAPIController.detalle); 



module.exports = router;