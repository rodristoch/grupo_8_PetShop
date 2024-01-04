let enMantenimiento = true;

function sitioMantenimiento(req, res, next) {

    if (enMantenimiento == true){
        res.render("sitioMantenimiento.ejs")
    }
    next()
}

module.exports = sitioMantenimiento;