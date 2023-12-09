const userController = {
    register : (req, res) => {
        res.render('register.ejs'); // renderizamos el ejs de index, enviamos como respuesta a al solicitud que se hace cuando se ingresa a index.
    },

    login : (req, res) => {
        res.render('login.ejs');
    },

    carrito : (req, res) => {
        res.render('carrito.ejs');
    },


}

module.exports = userController;