const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
/* const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const mainController = {
    index: async (req, res) => {
        try {
            const productos = await db.Producto.findAll();
           
            // Filtrar y mostrar 6 productos de perros y gatos 
            const productosPerro = productos.filter(producto => producto.tipo_mascota_id === 2).slice(0, 6);

            const productosGato = productos.filter(producto => producto.tipo_mascota_id === 1).slice(0, 6);

           
             // Accesorios perros
        const productosPerroAccesorios = await db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                attributes: ['id', 'categoria'], // La unica manera de resolver el problema del CreateAt es definir que columna quiero usar en la relacion
                through: { attributes: [] }, // Esto vita incluir automáticamente las columnas de la tabla intermedia
                where : { 
                    id: 2
                }
            }],
            where: {
                tipo_mascota_id: 2
            }
        });
        
        // Accesorios gato
        const productosGatoAccesorios = await db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                attributes: ['id', 'categoria'], // La unica manera de resolver el problema del CreateAt es definir que columna quiero usar en la relacion
                through: { attributes: [] }, // Esto vita incluir automáticamente las columnas de la tabla intermedia
                where : { 
                    id: 2
                }
            }],
            where: {
                tipo_mascota_id: 1
            }
        });

            // Filtrar accesorios sin descuento de perros y gatos
            const accesoriosPerroSinDescuento = productosPerroAccesorios.filter(producto => producto.discount === 'No');
            const accesoriosGatoSinDescuento = productosGatoAccesorios.filter(producto => producto.discount === 'No');

            // Filtrar productos con descuento de perros y gatos
            const productosPerroConDescuento = productosPerro.filter(producto => producto.discount === 'Si');
            const productosGatoConDescuento = productosGato.filter(producto => producto.discount === 'Si');

            // Obtener usuario que ha iniciado sesión
            const userALoguearse = req.session.userLogueado;

            // Renderizar la vista con los datos obtenidos
            res.render("index.ejs", {
                productosPerro,
                productosGato,
                productosPerroAccesorios,
                productosGatoAccesorios,
                productosPerroConDescuento,
                productosGatoConDescuento,
                accesoriosPerroSinDescuento,
                accesoriosGatoSinDescuento,
                userALoguearse
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


