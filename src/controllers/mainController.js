const fs = require("fs");
const path = require("path");


const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
/* const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */



const mainController = {
    index : (req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        //productos gatos
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});
        

        //productos perros accesorios
        const productosPerroAccesorios = productosPerro.filter(product => {return product.category == "Accesorio"});
        //productos gatos accesorios
        const productosGatoAccesorios = productosGato.filter(product => {return product.category == "Accesorio"});

        //accesorios sin descuentos de perros
        const accesoriosPerroSinDescuento = productosPerroAccesorios.filter(product => {return product.discount == "No"});
        //accesorios sin descuentos de gatos
		const accesoriosGatoSinDescuento = productosGatoAccesorios.filter(product => {return product.discount == "No"});

        //productos con descuentos de perros
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
        //productos con descuentos de gatos
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

        //usuario que se loguea
        const usuario = req.session.userLogueado

		res.render("index.ejs", {productosPerro, productosGato, productosPerroAccesorios, productosGatoAccesorios, productosPerroConDescuento, productosGatoConDescuento, accesoriosPerroSinDescuento, accesoriosGatoSinDescuento, usuario});
        
	}
}

module.exports = mainController;