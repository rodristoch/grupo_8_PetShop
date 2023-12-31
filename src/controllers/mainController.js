const fs = require("fs");
const path = require("path");

const productosPerroFilePath = path.join(__dirname, '../data/productos-perro.json');
/* const productosPerro = JSON.parse(fs.readFileSync(productosPerroFilePath, 'utf-8')); */

const productosGatoFilePath = path.join(__dirname, '../data/productos-gato.json');
/* const productosGato = JSON.parse(fs.readFileSync(productosGatoFilePath, 'utf-8')); */



const mainController = {
    index : (req, res) => {

        //productos perros
        const productosPerro = JSON.parse(fs.readFileSync(productosPerroFilePath, 'utf-8'));

        //productos gatos
        const productosGato = JSON.parse(fs.readFileSync(productosGatoFilePath, 'utf-8'));

        //productos perros accesorios
        const productosPerroAccesorios = productosPerro.filter(product => {return product.category == "Accesorio"});

        //productos gatos accesorios
        const productosGatoAccesorios = productosGato.filter(product => {return product.category == "Accesorio"});

        //productos con descuentos
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

		res.render("index.ejs", {productosPerro, productosGato, productosPerroAccesorios, productosGatoAccesorios, productosPerroConDescuento, productosGatoConDescuento});
	},


}

module.exports = mainController;