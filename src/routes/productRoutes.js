const express = require('express'); // requerimos express

const router = express.Router(); // llamamos al metodo Router de express

const productController = require('../controllers/productController.js'); // requerimos el controlador que queremos usar. 

router.get('/categoria', productController.categoria) // ingresamos al router lo que debe hacer cuando el user ingrese en /

router.get('/detalle', productController.detalle) // ingresamos al router lo que debe hacer cuando el user ingrese en /



module.exports = router; 