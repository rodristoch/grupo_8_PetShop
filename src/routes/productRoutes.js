// ************ Require's ************
const express = require('express'); // requerimos express
const router = express.Router(); // llamamos al metodo Router de express
const multer = require("multer");
const path = require ("path")

// ************ Controller Require ************
const productController = require('../controllers/productController.js'); // requerimos el controlador que queremos usar. 
const sitioMantenimiento = require("../middlewares/sitioMantenimiento.js");


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

// Mostrar paginas de productos por categoria
// Productos de perro
router.get('/perro', productController.categoriaPerro) 
router.get('/perro/promociones/', productController.promocionesPerro)
router.get('/perro/comida', productController.comidaPerro) 
router.get('/perro/accesorios', productController.accesoriosPerro) 
router.get('/perro/higiene', productController.higienePerro) 
router.get('/perro/juguetes', productController.juguetesPerro)

// Productos de gato
router.get('/gato', productController.categoriaGato) 
router.get('/gato/promociones', productController.promocionesGato) 
router.get('/gato/comida', productController.comidaGato) 
router.get('/gato/accesorios', productController.accesoriosGato) 
router.get('/gato/higiene', productController.higieneGato) 
router.get('/gato/juguetes', productController.juguetesGato) 

router.get('/promociones/', productController.promociones) 
router.get('/marcas/', sitioMantenimiento, productController.marcas)

// Mostrar pagina de producto (por id)
router.get('/detalle/:id', productController.detalle) 

// Crear producto
router.get('/alta', productController.alta);
router.post('/alta', upload.single("imagen_producto"), productController.crearProducto);

// Modificar producto
router.get('/editar/:id', productController.editar);
router.put('/editar/:id', upload.single("imagen_producto"), productController.editarProducto )

// Eliminar producto
router.delete("/eliminar/:id", productController.quitarProducto)

module.exports = router; 