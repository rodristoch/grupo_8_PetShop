const express = require('express'); // requerimos express

const router = express.Router(); // llamamos al metodo Router de express

const mainController = require('../controllers/mainController.js'); // requerimos el controlador que queremos usar. 

router.get('/', mainController.index) // ingresamos al router lo que debe hacer cuando el user ingrese en /

module.exports = router; 