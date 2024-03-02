const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
/* const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 3333*/

const mainController = {
    index: async (req, res) => {
        try {
            const productos = await db.Producto.findAll();
           
            // Filtrar y mostrar 6 productos de perros y gatos 
            const productosPerro = productos.filter(producto => producto.tipo_mascota_id === 2).slice(0, 6);

            const productosGato = productos.filter(producto => producto.tipo_mascota_id === 1).slice(0, 6);

// Accesorios perros
             let productosPerroAccesorios
        try {
            
                productosPerroAccesorios = await db.Producto.findAll({
                include: [{
                    model: db.Categoria,
                    as: 'categorias',
                    attributes: ['id', 'categoria'],
                    through: { attributes: [] },
                    where: {
                        id: 2
                    }
                }],
                where: {
                    tipo_mascota_id: 2
                }
            });
            // mostrar N productos
            productosPerroAccesorios = productosPerroAccesorios.slice(0, 6);
        } catch (error) {
            console.error('Error al consultar los accesorios para perros:', error);
        }
        
// Accesorios gato
                let productosGatoAccesorios
        try {
          
                productosGatoAccesorios = await db.Producto.findAll({
                include: [{
                    model: db.Categoria,
                    as: 'categorias',
                    attributes: ['id', 'categoria'],
                    through: { attributes: [] },
                    where: {
                        id: 2
                    }
                }],
                where: {
                    tipo_mascota_id: 1
                }
            });
            // mostrar N productos
            productosGatoAccesorios = productosGatoAccesorios.slice(0, 6);
        } catch (error) {
            console.error('Error al consultar los accesorios para gatos:', error);
        }
            


//PERRO productos con descuento 
        let productosConDescuentoPerro;
        try {
            // Busca los productos con descuento id 2
            productosConDescuentoPerro = await db.Producto.findAll({
                include: [{
                    model: db.Descuento,
                    as: 'descuentos',
                    attributes: ['id', 'nombre', 'descripcion', 'fecha_inicio', 'fecha_final'],
                    through: { attributes: [] }, // Evita incluir automáticamente las columnas de la tabla intermedia
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                }],
                where: {
                    tipo_mascota_id: 2 // Filtrar por el tipo de mascota 
                }
            });

            // mostrar N productos
            productosConDescuentoPerro = productosConDescuentoPerro.slice(0, 6);

            // comprobación de que trae productos con descuento
            //console.log(productosConDescuentoPerro.length); 
        } catch (error) {
            console.error('Error al buscar productos con el descuento ID 2:', error);
           
        }




//GATO productos con descuento
        let productosConDescuentoGato;
        try {
            // Busca los productos con descuento id 2
            productosConDescuentoGato = await db.Producto.findAll({
                include: [{
                    model: db.Descuento,
                    as: 'descuentos',
                    attributes: ['id', 'nombre', 'descripcion', 'fecha_inicio', 'fecha_final'],
                    through: { attributes: [] }, // Evita incluir automáticamente las columnas de la tabla intermedia
                    where: {
                        id: 2 // Filtrar por el ID del descuento que quieres (en este caso, ID 2)
                    }
                }]
                // Si se quiere filtra el descuento por mas mascota 2= perro 1= gato
                ,
                where: {
                    tipo_mascota_id: 1 // Filtrar por el tipo de mascota 
                }
            });
            // mostrar N productos
            productosConDescuentoGato = productosConDescuentoGato.slice(0, 6);

            // comprobación de que trae productos con descuento
            //console.log(productosConDescuentoGato.length); 
        } catch (error) {
            console.error('Error al buscar productos con el descuento ID 2:', error);
            
        }


//GATO productos con descuento
        let productosConDescuentoRandom;
        try {
            // Busca los productos con descuento id 2
            productosConDescuentoRandom = await db.Producto.findAll({
                include: [{
                    model: db.Descuento,
                    as: 'descuentos',
                    attributes: ['id', 'nombre', 'descripcion', 'fecha_inicio', 'fecha_final'],
                    through: { attributes: [] }, // Evita incluir automáticamente las columnas de la tabla intermedia
                    where: {
                        id: 2 // Filtrar por el ID del descuento que quieres (en este caso, ID 2)
                    }
                }]
                // Si se quiere filtra el descuento por mas mascota 2= perro 1= gato
                ,
                where: {
                    tipo_mascota_id: 1 // Filtrar por el tipo de mascota 
                }
            });
            // mostrar N productos
            productosConDescuentoRandom = productosConDescuentoRandom.slice(0, 12);

            // comprobación de que trae productos con descuento
            //console.log(productosConDescuentoGato.length); 
        } catch (error) {
            console.error('Error al buscar productos con el descuento ID 2:', error);
            
        }

// Obtener usuario que ha iniciado sesión
        const userALoguearse = req.session.userLogueado;


            // Renderizar la vista con los datos obtenidos
            res.render("index.ejs", {
                productosPerro,
                productosGato,
                productosPerroAccesorios,
                productosGatoAccesorios,
                productosConDescuentoPerro,
                productosConDescuentoGato,
                productosConDescuentoRandom,
                userALoguearse, 
            });
        } catch (error) {
            res.send(error);
        }



// const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        // //productos perros
        // const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        // //productos gatos
        // const productosGato = productos.filter(product => {return product.id_pet == "Gato"});
        

        // //productos perros accesorios
        // const productosPerroAccesorios = productosPerro.filter(product => {return product.category == "Accesorio"});
        // //productos gatos accesorios
        // const productosGatoAccesorios = productosGato.filter(product => {return product.category == "Accesorio"});

        // //accesorios sin descuentos de perros
        // const accesoriosPerroSinDescuento = productosPerroAccesorios.filter(product => {return product.discount == "No"});
        // //accesorios sin descuentos de gatos
		// const accesoriosGatoSinDescuento = productosGatoAccesorios.filter(product => {return product.discount == "No"});

        // //productos con descuentos de perros
        // const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
        // //productos con descuentos de gatos
		// const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

        // //usuario que se loguea
        // const userALoguearse = req.session.userLogueado

		// res.render("index.ejs", {productosPerro, productosGato, productosPerroAccesorios, productosGatoAccesorios, productosPerroConDescuento, productosGatoConDescuento, accesoriosPerroSinDescuento, accesoriosGatoSinDescuento, userALoguearse});
    }
};

module.exports = mainController;


