const fs = require("fs");
const path = require("path");

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

    alta : (req, res) => {
        res.render('alta-producto.ejs');
    },

    editar : (req, res) => {
        res.render('editar-producto.ejs');
    },

}

module.exports = productController;