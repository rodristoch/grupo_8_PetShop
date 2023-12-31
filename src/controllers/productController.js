const fs = require("fs");
const path = require("path")

//base de datos de produsctos
const productsFilepath = path.join(__dirname, "../data/productosDataBase.json")


const productController = {
    detalle : (req, res) => {
        res.render('detalles-del-producto.ejs'); 
    },

    categoriaPerro : (req, res) => {

        //productos perros
        const productosPerro = JSON.parse(fs.readFileSync(productosPerroFilePath, 'utf-8'));

        res.render('categoria-perro.ejs', {productosPerro});
    },

    categoriaGato : (req, res) => {

        //productos gatos
        const productosGato = JSON.parse(fs.readFileSync(productosGatoFilePath, 'utf-8'));

        res.render('categoria-gato.ejs', {productosGato});
    },

    alta : (req, res) => {
        res.render('alta-producto.ejs');
    },

    crearProducto: (req, res) => {

        // Traer constante de productos
		// Transformarlo en un array
        const productos = JSON.parse(fs.readFileSync(productsFilepath, "utf-8"));

        
        // Tener la info del formulario
		// Crear el objeto literal (producto) a sumar al array

        const nuevoProducto = {
             id: productos [productos.length - 1].id +1,
             name: req.body.nombre_producto,
             description: req.body.descripcion ,
             image: req.file.filename,
             pet: req.body.mascota,
             category: req.body.categoria,
             colors: req.body.color_producto,
             weight: req.body.peso_producto ,
             price: req.body.precio_producto,
             quatity: req.body.cantidad_producto
            // discount: : 
        }

        productos.push(nuevoProducto);
        
       // Sobreescribir el archivo JSON
        fs.writeFileSync(productsFilepath, JSON.stringify(productos, null, " "));

        // Mostrar poducto creado

        res.redirect("/grupo_8_PetShop/src/views/detalles-del-producto.ejs" + nuevoProducto.id)
		
    },

    editar : (req, res) => {
        res.render('editar-producto.ejs');
    },

    editarproducto: (req, res) => {

    }

}

module.exports = productController;