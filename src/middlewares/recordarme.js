const fs = require("fs");
const path = require("path")
const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function recordarme(req, res, next){

    if(req.cookies.recordarme != undefined && req.session.userLogueado == undefined){ //si esta cookie existe (el nombre de la cookie debe ser el de la cookie creada en el controller) y a su vez, no está el user en sesion...
        //traigo los usuarios
        /* const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); */

        let users = db.Usuario.findAll({
            include: ["permisos"],
        })

        .then(users => {

            let userALoguearse

            for(let i=0; i < users.length; i++){  //recorremos todos los usuarios

                if(users[i].email == req.cookies.recordarme){  //preguntamos si el email de ese usuario (el de la posicion i) es igual al email que está en la cookie

                    userALoguearse = users[i]  //el usuario q se loguea es el q matchea en la posicion i (lo encontró)

                    break;
                    
                }     
            }

            req.session.userLogueado = userALoguearse;  //si encontró al usuario lo guardo en session
        
        })

    } 

    next();
 
}

module.exports = recordarme;