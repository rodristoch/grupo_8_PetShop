function authMiddleware(req, res, next){
    if(req.session.userLogueado != undefined){
        next();
    } else {
        res.send("Tenes que estar logueado")
    }

}

module.exports=authMiddleware;