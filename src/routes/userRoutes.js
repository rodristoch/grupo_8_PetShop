// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require("path")
const {body} = require("express-validator");

// ************ User Require ************
const userController = require('../controllers/userController.js'); // requerimos el controlador que queremos usar. 

// ************ Validations ************
const validaciones = [
    body("nombre").notEmpty().withMessage("Debes completar un nombre"),
    body("email").notEmpty().withMessage("Debes completar un email").bail().isEmail().withMessage("El email debe ser valido"),
    body("password").notEmpty().withMessage("Debes completar con una contraseña").bail().isLength({min: 5}).withMessage("La constraseña debe tener un min de 5 caracteres")
]


// Crear un usuario
router.get("/register", userController.register) 
router.post("/register", validaciones, userController.processRegister);

// Editar un usuario
router.get("/edit/:id", userController.edit);
router.put("/edit/:id", validaciones, userController.processEdit);

//Login
router.get("/login", userController.login) 

//Carrito
router.get("/carrito", userController.carrito) 

//Carrito 2 
router.get("/carrito2", userController.carrito2) 


module.exports = router; 


