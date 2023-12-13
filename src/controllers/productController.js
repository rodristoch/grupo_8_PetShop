const productController = {
    detalle : (req, res) => {
        res.render('detalles-del-producto.ejs'); 
    },

    categoria : (req, res) => {
        res.render('categoria.ejs');
    },

    alta : (req, res) => {
        res.render('alta.ejs');
    },

    editar : (req, res) => {
        res.render('editar.ejs');
    },

}

module.exports = productController;