const fs = require("fs");
const path = require("path");

const accesoriosFilePath = path.join(__dirname, '../data/productos-accesorios.json');
/* const accesorios = JSON.parse(fs.readFileSync(accesoriosFilePath, 'utf-8')); */

const comidaFilePath = path.join(__dirname, '../data/productos-comida.json');
/* const comida = JSON.parse(fs.readFileSync(comidaFilePath, 'utf-8')); */

const higieneFilePath = path.join(__dirname, '../data/productos-higiene.json');
/* const higiene = JSON.parse(fs.readFileSync(higieneFilePath, 'utf-8')); */

const juguetesFilePath = path.join(__dirname, '../data/productos-juguetes.json');
/* const juguetes = JSON.parse(fs.readFileSync(juguetesFilePath, 'utf-8')); */

const mainController = {
    index : (req, res) => {
        const accesorios = JSON.parse(fs.readFileSync(accesoriosFilePath, 'utf-8'));
        const comida = JSON.parse(fs.readFileSync(comidaFilePath, 'utf-8'));
        const higiene = JSON.parse(fs.readFileSync(higieneFilePath, 'utf-8'));
        const juguetes = JSON.parse(fs.readFileSync(juguetesFilePath, 'utf-8'));

        //productos perros
        const accesoriosPerro = accesorios.filter(product => {return product.category == "Perro"})
        const comidaPerro = comida.filter(product => {return product.category == "Perro"})
        const higienePerro = higiene.filter(product => {return product.category == "Perro"})
        const juguetesPerro = juguetes.filter(product => {return product.category == "Perro"})

        //productos gatos
        const accesoriosGato = accesorios.filter(product => {return product.category == "Gato"})
		const comidaGato = comida.filter(product => {return product.category == "Gato"})
        const higieneGato = higiene.filter(product => {return product.category == "Gato"})
        const juguetesGato = juguetes.filter(product => {return product.category == "Gato"})

        //productos con descuentos
        const accesoriosDescuento = accesorios.filter(product => {return product.in-sale == "Si"})
		const comidaDescuento = comida.filter(product => {return product.in-sale == "Si"})
        const higieneDescuento = higiene.filter(product => {return product.in-sale == "Si"})
        const juguetesDescuento = juguetes.filter(product => {return product.in-sale == "Si"})

		res.render("index.ejs", {accesoriosPerro, comidaPerro, higienePerro, juguetesPerro, accesoriosGato, comidaGato, higieneGato, juguetesGato, accesoriosDescuento, comidaDescuento, higieneDescuento, juguetesDescuento});
	},


}

module.exports = mainController;