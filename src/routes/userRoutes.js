// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer")
const path = require("path")
const {body} = require("express-validator");
const authMiddleware = require('../middlewares/authMiddleware.js');

// ************ User Require ************
const userController = require('../controllers/userController.js'); // requerimos el controlador que queremos usar. 
const productController = require('../controllers/productController.js');


// ************ Multer ************
const storage = multer.diskStorage ({
    destination: function(req, file, cb) {
        cb(null, 'public/img/usersImage')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage});


// ************ Validations ************
const validaciones = [
    body("nombre").notEmpty().withMessage("Debes completar un nombre"),
    body("apellido").notEmpty().withMessage("Debes completar un apellido"),
    body("email").notEmpty().withMessage("Debes completar un email").bail().isEmail().withMessage("El email debe ser valido"),
    body("password").notEmpty().withMessage("Debes completar con una contraseña").bail().isLength({min: 5}).withMessage("La constraseña debe tener un min de 5 caracteres"),
    body("passwordrepeat").notEmpty().withMessage("Debes reingresar tu contraseña").bail().isLength({min: 5}).withMessage("La constraseña debe tener un min de 5 caracteres"),
    body("terminos").notEmpty().withMessage("Debes aceptar los términos y condiciones")
]

const validacionesLogin = [
    body("email").notEmpty().withMessage("Ingresa tu email").bail().isEmail().withMessage("El email debe ser valido"),
    body("password").notEmpty().withMessage("Ingresa tu contraseña").bail().isLength({min: 5}).withMessage("La constraseña debe tener un min de 5 caracteres")
]


// Crear un usuario
router.get("/register", userController.register) 
router.post("/register", upload.single("imagen_user"), validaciones, userController.processRegister);

// Perfil de usuario
router.get("/perfil/:id", userController.perfil);

// Editar un usuario
router.get("/edit/:id", authMiddleware, userController.edit);
router.put("/edit/:id", validaciones, userController.processEdit2);

//Login
router.get("/login", userController.login) 
router.post("/login", validacionesLogin, userController.processLogin2);

//Logout
router.get("/logout", userController.logout)

//Logout de edicion de user
router.get("/logout2", userController.logout2)

//Carrito 2 
router.get("/carrito2", authMiddleware, userController.carrito2)

//Base de usuarios
router.get('/usuariosListado', userController.usuariosListado)




//Chequear si estamos logueados
router.get("/check", function(req, res){
    if(req.session.userLogueado == undefined){
        res.send("No estas logueado")
    } else {
        res.send("El usuario logueado es " + req.session.userLogueado.email)
    }
});


module.exports = router; 

