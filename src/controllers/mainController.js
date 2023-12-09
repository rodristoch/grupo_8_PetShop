const mainController = {
    index : (req, res) => {
        res.render('index.ejs'); // renderizamos el ejs de index, enviamos como respuesta a al solicitud que se hace cuando se ingresa a index.
    }
}

module.exports = mainController;