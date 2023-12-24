// ************ Require's ************
const express = require('express'); // requerimos express
const router = express.Router(); // llamamos al metodo Router de express
const multer = require("multer");
const path = require ("path")

// ************ Controller Require ************
const productController = require('../controllers/productController.js'); // requerimos el controlador que queremos usar. 


router.get('/categoria', productController.categoria) 

router.get('/detalle', productController.detalle) 

router.get('/alta', productController.alta)

router.get('/editar', productController.editar)



module.exports = router; 