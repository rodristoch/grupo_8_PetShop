const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")


const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    
    login : (req, res) => {
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        res.render('login.ejs', {userALoguearse});
    },

    processLogin: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        //Validaciones con la info del request
        const validationResults = validationResult(req); 

        if(validationResults.errors.length > 0){ //si hubo errores de validacion

            //renderizo la vista y le mando la info q llega del formulario con los errores
            res.render("login", {errors: validationResults.mapped(), oldData: req.body, userALoguearse});

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

            if(!userALoguearse){  //si no encontró al usuario le manda el mensaje de credenciales invalidas

                return res.render("login", {errorsCredencialesInvalidas: [{msg: "Credenciales invalidas"}], usuario});  
            
            } 

            req.session.userLogueado = userALoguearse;  //si encontró al usuario lo guardo en session

            if (req.body.recordarme) {
                req.session.user = userALoguearse;
                res.cookie('recordarme', userALoguearse.email, { maxAge: 90000 });
              }
              

            res.redirect("/")
            

        }
    },
    register: (req, res) => {
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        res.render("register.ejs", {userALoguearse});
    },

    processRegister: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

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
            res.render("register", {errors: validationResults.mapped(), oldData: req.body, userALoguearse});

        } else {  //si no hubo errores de validacion

            //lo pusheo al array al nuevo
            users.push(newUser);

            //escribo el json
		    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

            //renderizo la vista con la info bien
            res.redirect("/users/login");
        }

    },


    edit: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        //traigo los usuarios
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        //busco al usuario a editar por id
		const userToEdit = users.find(user => {return user.id == req.params.id})
		
		res.render("edit-user", {userToEdit, userALoguearse});
	},
        

    processEdit: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

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
            res.render("edit-user", {errors: validationResults.mapped(), userToEdit: req.body, userALoguearse});

        } else {

            users[indice] = userToEdit;

            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
    
            res.redirect("/");

        }
       
    },
    logout: (req, res) => {
        req.session.destroy( err => {
            if (!err) {
                res.redirect("/")
            }else {
                console.error("Error al cerrar sesión")
            }
        })
    },
    carrito : (req, res) => {

        //usuario q se loguea
        const usuario = req.session.userLogueado

        res.render('carrito.ejs', usuario);
    },

    carrito2 : (req, res) => {
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});

        res.render('carrito2.ejs', {productosPerroConDescuento, userALoguearse});
    },


}

module.exports = userController;