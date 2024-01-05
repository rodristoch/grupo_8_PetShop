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

        
        //productos con descuentos de perros
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
        //productos con descuentos de gatos
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

		res.render("index.ejs", {productosPerro, productosGato, productosPerroAccesorios, productosGatoAccesorios, productosPerroConDescuento, productosGatoConDescuento});
	},


}

module.exports = mainController;