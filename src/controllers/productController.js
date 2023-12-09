const productController = {
    detalle : (req, res) => {
        res.render('detalles-del-producto.ejs'); 
    },

    categoria : (req, res) => {
        res.render('categoria.ejs');
    },

}

module.exports = productController;