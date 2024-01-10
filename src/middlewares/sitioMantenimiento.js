let enMantenimiento = true;

function sitioMantenimiento(req, res, next) {

    if (enMantenimiento){
        res.render("sitioMantenimiento.ejs")
    }
    next()
}

module.exports = sitioMantenimiento;