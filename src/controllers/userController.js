const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")


const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    
    login : (req, res) => {
        //usuario q se loguea
        const usuario = req.session.userLogueado

        res.render('login.ejs', {usuario});
    },

    processLogin: (req, res) => {

        //Validaciones con la info del request
        const validationResults = validationResult(req); 

        if(validationResults.errors.length > 0){ //si hubo errores de validacion

            //renderizo la vista y le mando la info q llega del formulario con los errores
            res.render("login", {errors: validationResults.mapped(), oldData: req.body});

        } else { //si no hubo errores de validacion

            //traigo los usuarios
            const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

            let userALoguearse

            for(let i=0; i < users.length; i++){  //recorremos todos los usuarios

                if(users[i].email == req.body.email){  //preguntamos si el email de ese usuario (el de la posicion i) es igual al email que está poniendo en el campo

                    if(bcrypt.compareSync(req.body.password, users[i].password)){  //y si al comparar si la contraseña de ese usuario (el de la posicion i) es igual a la que está poniendo en el campo

                        userALoguearse = users[i]  //el usuario q se loguea es el q matchea en la posicion i (lo encontró)

                        break;
                    }

                }
                      
            }

            if(userALoguearse == undefined){  //si no encontró al usuario le manda el mensaje de credenciales invalidas

                return res.render("login", {errors: [{msg: "Credenciales invalidas"}]});  
            
            } 

            req.session.userLogueado = userALoguearse;  //si encontró al usuario lo guardo en session

            if(req.body.checkbox){ //si el checkbox de recordarme es distinto de undefined (quiere decir si está tildado)

                res.cookie("recordarme", userALoguearse.email, {maxAge: 900000}) 
                //creamos la cookie recordarme con el valor del email del userALoguearse y una duracion de la cookie de 60seg

            }

            res.redirect("/")
            

        }
    },

    carrito : (req, res) => {

        //usuario q se loguea
        const usuario = req.session.userLogueado

        res.render('carrito.ejs', usuario);
    },

    carrito2 : (req, res) => {
        //usuario q se loguea
        const usuario = req.session.userLogueado

        const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});

        res.render('carrito2.ejs', {productosPerroConDescuento, usuario});
    },

    register: (req, res) => {
        res.render("register");
    },

    processRegister: (req, res) => {

        //traigo los usuarios
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        //creo uno nuevo
        const newUser = {
			id: users[users.length - 1].id + 1,
			nombre: req.body.nombre,
            apellido: req.body.apellido,
			email: req.body.email, 
            password: bcrypt.hashSync(req.body.password, 10),
            category: req.body.category
		}

        //Validaciones con la info del request
        const validationResults = validationResult(req); 

        if(validationResults.errors.length > 0){ //si hubo errores de validacion

            //renderizo la vista y le mando la info q llega del formulario con los errores y la info bien completada
            res.render("register", {errors: validationResults.mapped(), oldData: req.body});

        } else {  //si no hubo errores de validacion

            //lo pusheo al array al nuevo
            users.push(newUser);

            //escribo el json
		    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

            //renderizo la vista con la info bien
            res.render("register", {oldData: req.body});
        }

    },


    edit: (req, res) => {

        //usuario q se loguea
        const usuario = req.session.userLogueado

        //traigo los usuarios
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        //busco al usuario a editar por id
		const userToEdit = users.find(user => {return user.id == req.params.id})
		
		res.render("edit-user", {userToEdit, usuario});
	},
        

    processEdit: (req, res) => {

        //traigo los usuarios
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        //busco al usuario a editar por id
		let userToEdit = users.find(user => {return user.id == req.params.id}) 

        // Creamos el usuario "nuevo" que va a reemplazar al anterior
        userToEdit = {
			id: userToEdit.id,
			nombre: req.body.nombre,
            apellido: req.body.apellido,
			email: req.body.email, 
            password: bcrypt.hashSync(req.body.password, 10),
            category: req.body.category
		}

        // Buscamos la posicion del user a editar
		let indice = users.findIndex(user => {return user.id == req.params.id})

        //Validaciones con la info del request
        const validationResults = validationResult(req); 

        if(validationResults.errors.length > 0){ //si hubo errores de validacion
 
            //renderizo la vista y le mando la info q llega del formulario con los errores y la info bien completada
            res.render("edit-user", {errors: validationResults.mapped(), userToEdit: req.body});

        } else {

            users[indice] = userToEdit;

            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
    
            res.redirect("/");

        }
       
    },


}

module.exports = userController;