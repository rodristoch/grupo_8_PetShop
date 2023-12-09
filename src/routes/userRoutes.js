const express = require('express'); // requerimos express

const router = express.Router(); // llamamos al metodo Router de express

const userController = require('../controllers/userController.js'); // requerimos el controlador que queremos usar. 

router.get('/register', userController.register) // ingresamos al router lo que debe hacer cuando el user ingrese en /

router.get('/login', userController.login) // ingresamos al router lo que debe hacer cuando el user ingrese en /

router.get('/carrito', userController.carrito) // ingresamos al router lo que debe hacer cuando el user ingrese en /

module.exports = router; 