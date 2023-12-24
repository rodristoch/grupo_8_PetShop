const productController = {
    detalle : (req, res) => {
        res.render('detalles-del-producto.ejs'); 
    },

    categoria : (req, res) => {
        res.render('categoria.ejs');
    },

    alta : (req, res) => {
        res.render('alta-producto.ejs');
    },

    editar : (req, res) => {
        res.render('editar-producto.ejs');
    },

}

module.exports = productController;