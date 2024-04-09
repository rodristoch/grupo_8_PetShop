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

// TODOS los productos
router.get('/', productController.productos) 
// Pagina de productos con descuentos
router.get('/promociones/', productController.promociones) 

// Mostrar paginas de productos por categoria
// Productos de perro
router.get('/perro', productController.categoriaPerro) 
router.get('/perro/promociones', productController.promocionesPerro)
router.get('/perro/comida', productController.comidaPerro) 
router.get('/perro/comida/:id', productController.DetalleProductosPerro)
router.get('/perro/accesorios', productController.accesoriosPerro) 
router.get('/perro/accesorios/:id', productController.DetalleProductosPerro)
router.get('/perro/higiene', productController.higienePerro) 
router.get('/perro/higiene/:id', productController.DetalleProductosPerro)
router.get('/perro/juguetes', productController.juguetesPerro)
router.get('/perro/juguetes/:id', productController.DetalleProductosPerro)

// Productos de gato
router.get('/gato', productController.categoriaGato) 
router.get('/gato/promociones', productController.promocionesGato) 
router.get('/gato/comida', productController.comidaGato) 
router.get('/gato/comida/:id', productController.DetalleProductosGato)
router.get('/gato/accesorios', productController.accesoriosGato) 
router.get('/gato/accesorios/:id', productController.DetalleProductosGato)
router.get('/gato/higiene', productController.higieneGato) 
router.get('/gato/higiene/:id', productController.DetalleProductosGato)
router.get('/gato/juguetes', productController.juguetesGato) 
router.get('/gato/juguetes/:id', productController.DetalleProductosGato)

// Marcas
router.get('/marcas/', productController.marcas)
router.get('/marcas/eukanuba', productController.eukanuba)
router.get('/marcas/proplan', productController.proplan)
router.get('/marcas/royal', productController.royal)
router.get('/marcas/cancat', productController.cancat)
router.get('/marcas/catit', productController.catit)

// Mostrar pagina de producto (por id)
/* router.get('/detalle/:id/', productController.detalle) */ 

// Crear producto
router.get('/alta', productController.alta2);
router.post('/alta', upload.single("imagen"), productController.crearProducto2);

// Modificar producto
router.get('/editar/:id', productController.editar);
router.put('/editar/:id', upload.single("imagen"), productController.editarProducto)

// Eliminar producto
router.delete("/eliminar/:id", productController.destroy)

// Buscar prdocuto
router.get('/buscar', productController.buscar)
/* router.post('/buscar', productController.buscar) */
router.post('/buscar', async (req, res) => {
    try {
        const { producto } = req.body;
        const resultados = await productController.buscar(producto);
        res.render('busqueda.ejs', { resultados });
    } catch (error) {
        console.error(error);
        res.status(404).send('Error en la búsqueda de productos.');
    }
})

module.exports = router; 