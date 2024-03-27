// ************ Require's ************
const express = require('express'); // requerimos express
const router = express.Router(); // llamamos al metodo Router de express

// ************ Controller Require ************
const mainController = require('../controllers/mainController.js'); // requerimos el controlador que queremos usar. 

// ************ Rutas ************
router.get('/', mainController.index) // ingresamos al router lo que debe hacer cuando el user ingrese en /
router.get('/sobrenosotros', mainController.sobreNosotros) // definimos la ruta de la pagina sobre nosotros /


module.exports = router; 