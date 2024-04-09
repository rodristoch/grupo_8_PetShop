function authMiddleware(req, res, next){
    if(req.session.userLogueado != undefined){
        next();
    } else {
        res.redirect("/users/login")
    }

}

module.exports=authMiddleware;