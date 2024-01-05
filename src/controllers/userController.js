const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');


const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    
    login : (req, res) => {
        res.render('login.ejs');
    },

    carrito : (req, res) => {
        res.render('carrito.ejs');
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
            password: req.body.password,
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

        //traigo los usuarios
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        //busco al usuario a editar por id
		const userToEdit = users.find(user => {return user.id == req.params.id})
		
		res.render("edit-user", {userToEdit});
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
            password: req.body.password,
            category: req.body.category
		}

        // Buscamos la posicion del user a editar
		let indice = users.findIndex(user => {return user.id == req.params.id})

        //Validaciones con la info del request
        const validationResults = validationResult(req); 

        if(validationResults.errors.length > 0){ //si hubo errores de validacion
 
            //renderizo la vista y le mando la info q llega del formulario con los errores y la info bien completada
            res.render("register", {errors: validationResults.mapped(), oldData: req.body});

        } else {

            users[indice] = userToEdit;

            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
    
            res.redirect("/");

        }
       
    },


}

module.exports = userController;