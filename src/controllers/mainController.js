const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
/* const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 333223*/

const mainController = {
    index: async (req, res) => {
        try {
            let productosPerro = await db.Producto.findAll({
                include: ['descuentos', "categorias", "tipos_mascota"],
                where: {
                    tipo_mascota_id: 2,
                },
                limit: 16
            })
    
            let productosGato = await db.Producto.findAll({
                include: ['descuentos', "categorias", "tipos_mascota"],
                where: {
                    tipo_mascota_id: 1,
                },
                limit: 16
            })

            Promise.all([productosPerro, productosGato])
            
// Accesorios perros
             let productosPerroAccesorios
        try {
            
                productosPerroAccesorios = await db.Producto.findAll({
                include: [{
                    model: db.Categoria,
                    as: 'categorias',
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
                    where: {
                        id: 2
                    }
                }],
                where: {
                    tipo_mascota_id: 1
                }
            });
            // mostrar N productos
            productosGatoAccesorios = productosGatoAccesorios.slice(0, 10);
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
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                }],
                where: {
                    tipo_mascota_id: 2 // Filtrar por el tipo de mascota 
                }
            });

            // mostrar N productos
            productosConDescuentoPerro = productosConDescuentoPerro.slice(0, 10);

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
            productosConDescuentoGato = productosConDescuentoGato.slice(0, 10);

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
            productosConDescuentoRandom = productosConDescuentoRandom.slice(0, 10);

            // comprobación de que trae productos con descuento
            //console.log(productosConDescuentoGato.length); 
        } catch (error) {
            console.error('Error al buscar productos con el descuento ID 2:', error);
            
        }

//AMBOS productos con descuento 
let productosConDescuento;
try {
    // Busca los productos con descuento id 2
    productosConDescuento = await db.Producto.findAll({
        include: [
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.TipoMascota,
                as: 'tipos_mascota',
            }]
    });

    // mostrar N productos
    productosConDescuento = productosConDescuento.slice(0, 16);

    // comprobación de que trae productos con descuento
    //console.log(productosConDescuentoPerro.length); 
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
                productosConDescuento,
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
    },
    sobreNosotros: function(req, res) {
        const userALoguearse = req.session.userLogueado
        res.render('sobreNosotros.ejs', {userALoguearse})
    }
};

module.exports = mainController;


