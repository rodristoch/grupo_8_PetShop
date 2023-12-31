// ************ Require's ************
const express = require('express'); // requerimos express
const router = express.Router(); // llamamos al metodo Router de express
const multer = require("multer");
const path = require ("path")

// ************ Controller Require ************
const productController = require('../controllers/productController.js'); // requerimos el controlador que queremos usar. 


// ************ Multer ************
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Donde guardamos los archivos
        cb(null, 'public/img/productos')
    },
    filename: function(req, file, cb) {
        // Que nombre tendran los archivos
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({storage: storage});

router.get('/categoria-perro', productController.categoriaPerro) 
router.get('/categoria-gato', productController.categoriaGato) 

router.get('/detalle/id:/', productController.detalle) 

// Crear producto
router.get('/alta', productController.alta);
router.post('/alta', upload.single("imagen-producto"), productController.crearProducto);

router.get('/editar/:id', productController.editar);
router.put('/editar/:id', upload.single("imagen-producto"), productController.editarproducto )



module.exports = router; 