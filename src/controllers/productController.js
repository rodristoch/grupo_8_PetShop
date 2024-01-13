const { log } = require("console");
const fs = require("fs");
const path = require("path")

//base de datos de productos
const productsFilePath = path.join(__dirname, "../data/productosDataBase.json");
/* const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */


const productController = {

    index: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("productos" , {productos})
    },

    detalle : (req, res) => {
       
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render("detalles-del-producto.ejs", {unProducto}); 
    },

    categoriaPerro : (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});

         //ID de producto
         const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render('categoria-perro.ejs', {productosPerro, unProducto});
    },

    categoriaGato : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos gatos
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })

        res.render('categoria-gato.ejs', {productosGato, unProducto});
    },

    promociones : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        //productos gatos
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

        //productos con descuentos de perros
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
		//productos con descuentos de gatos
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

         //ID de producto
         const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render('promociones.ejs', {productosPerroConDescuento, productosGatoConDescuento, unProducto});
    },

    promocionesPerro : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});

        //productos con descuentos de perros
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
		
        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })

        res.render('promociones-perro.ejs', {productosPerroConDescuento, unProducto});
    },

    promocionesGato : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos gatos
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

		//productos con descuentos de gatos
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render('promociones-gato.ejs', {productosGatoConDescuento, unProducto});
    },

    comidaPerro : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});

		//productos comida perros
		const comidaPerro = productosPerro.filter(product => {return product.category == "Comida"});

         //ID de producto
         const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render('comidaPerro.ejs', {comidaPerro, unProducto});
    },

    comidaGato : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos gatos
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

		//productos comida gatos
		const comidaGato = productosGato.filter(product => {return product.category == "Comida"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        
        res.render('comidaGato.ejs', {comidaGato, unProducto});
    },

    accesoriosPerro : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});

		//productos accesorios perros
		const accesoriosPerro = productosPerro.filter(product => {return product.category == "Accesorio"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render('accesoriosPerro.ejs', {accesoriosPerro, unProducto});
    },

    accesoriosGato : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

		//productos accesorios gatos
		const accesoriosGato = productosGato.filter(product => {return product.category == "Accesorio"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })

        res.render('accesoriosGato.ejs', {accesoriosGato, unProducto});
    },

    higienePerro : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});

		//productos higiene perros
		const higienePerro = productosPerro.filter(product => {return product.category == "Higiene"});
       
        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render('higienePerro.ejs', {higienePerro, unProducto});
    },

    higieneGato : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

		//productos higiene gatos
		const higieneGato = productosGato.filter(product => {return product.category == "Higiene"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render('higieneGato.ejs', {higieneGato, unProducto});
    },

    juguetesPerro : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});

		// juguetes perros
		const juguetesPerro = productosPerro.filter(product => {return product.category == "Juguetes"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })

        res.render('juguetesPerro.ejs', {juguetesPerro, unProducto});
    },

    juguetesGato : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

		// juguetes gatos
		const juguetesGato = productosGato.filter(product => {return product.category == "Juguetes"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })

        res.render('juguetesGato.ejs', {juguetesGato, unProducto});
    },

    marcas: (req, res) => {

        res.render('marcas.ejs');
    },

    alta : (req, res) => {
        res.render('alta-producto.ejs');
    },

    crearProducto: (req, res) => {

        // json de productos
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    
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
             quantity: req.body.cantidad_producto,
             discount: req.body.descuento 
        }

        productos.push(nuevoProducto);
        
       // Sobreescribir el archivo JSON
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));

        // Mostrar poducto creado

        res.redirect("/grupo_8_PetShop/src/views/detalles-del-producto.ejs" + nuevoProducto.id)
		
    },

    editar : (req, res) => {

        // Json con todos los productos
        let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        // Encontrar producto
        const editarProducto = productos.find( producto => {
            return producto.id == req.params.id
        })

        res.render('editar-producto.ejs', {editarProducto});
    },

    editarProducto: (req, res) => {
        // json de productos
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

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
            quantity: req.body.cantidad_producto,
            discount: req.body.descuento
       }

       //Posicion producto editar y reemplazo
       let indice = productos.findIndex(producto => {return producto.id});
       productos[indice] = edicionProducto

       //Re-escritura producto
       fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "), "utf-8");
       res.redirect("/") // ¿A donde lo redirigimos?
    },
    
    quitarProducto : (req, res) => {
        let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        //proceso de eliminación
        productos = productos.filter(producto => {
            return producto.id != req.params.id
        })

        //escribir archivo json
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "))
    }

}

module.exports = productController;