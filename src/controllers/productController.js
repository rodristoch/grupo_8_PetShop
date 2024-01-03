const fs = require("fs");
const path = require("path")

//base de datos de produsctos
const productsFilepath = path.join(__dirname, "../data/productosDataBase.json")

const productosPerroFilePath = path.join(__dirname, '../data/productos-perro.json');
/* const productosPerro = JSON.parse(fs.readFileSync(productosPerroFilePath, 'utf-8')); */

const productosGatoFilePath = path.join(__dirname, '../data/productos-gato.json');
/* const productosGato = JSON.parse(fs.readFileSync(productosGatoFilePath, 'utf-8')); */



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

    promociones : (req, res) => {

        //productos perros
        const productosPerro = JSON.parse(fs.readFileSync(productosPerroFilePath, 'utf-8'));
        //productos gatos
        const productosGato = JSON.parse(fs.readFileSync(productosGatoFilePath, 'utf-8'));

        //productos con descuentos
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

        res.render('promociones.ejs', {productosPerroConDescuento, productosGatoConDescuento});
    },

    alta : (req, res) => {
        res.render('alta-producto.ejs');
    },

    crearProducto: (req, res) => {

        // json de productos
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

        // Json con todos los productos
        let productos = JSON.parse(fs.readFileSync(productsFilepath, "utf-8"));

        // Encontrar producto
        const editarProducto = productos.find( producto => {
            return producto.id = req.params.id
        })

        res.render('editar-producto.ejs', {editarProducto});
    },

    editarProducto: (req, res) => {
        // json de productos
        const productos = JSON.parse(fs.readFileSync(productsFilepath, "utf-8"));

        //identificador de producto
        const id= req.params.id;
        let productoAEditar= productos.find(producto => producto.id == id);

        //Reemplazo de prodcuto

        const edicionProducto = {
            id: productoAEditar.id,
            name: req.body.nombre_producto,
            description: req.body.descripcion ,
            image: req.file !=undefined ? req.file.filename : productoAEditar.image,
            pet: req.body.mascota,
            category: req.body.categoria,
            colors: req.body.color_producto,
            weight: req.body.peso_producto ,
            price: req.body.precio_producto,
            quatity: req.body.cantidad_producto
           // discount: : 
       }

       //Posicion producto editar y reemplazo
       let indice = productos.findIndex(producto => {return producto.id});
       productos[indice] = edicionProducto

       //Re-escritura producto
       fs.writeFileSync(productsFilepath, JSON.stringify(productos, null, " "), "utf-8");
       res.redirect("/") // ¿A donde lo redirigimos?
    },
    
    quitarProducto : (req, res) => {
        let productos = JSON.parse(fs.readFileSync(productsFilepath, "utf-8"));

        //proceso de eliminación
        productos = productos.filter(producto => {
            return producto.id != req.params.id
        })

        //escribir archivo json
        fs.writeFileSync(productsFilepath, JSON.stringify(productos, null, " "))
    }

}

module.exports = productController;