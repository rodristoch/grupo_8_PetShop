const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs")
const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


// Json de usuarios
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {

    pruebaDb: (req, res) => {

        db.Usuario.findAll()
        .then(function(usuarios){
            res.render("prueba.ejs", {usuarios})
        })
        
    },
    
    login : (req, res) => {
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        res.render('login.ejs', {userALoguearse});
    },

    processLogin2: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        //Validaciones con la info del request
        const validationResults = validationResult(req);

        if(validationResults.errors.length > 0){ //si hubo errores de validacion

            //renderizo la vista y le mando la info q llega del formulario con los errores
            res.render("login", {errors: validationResults.mapped(), oldData: req.body, userALoguearse});

        } else {

            let users = db.Usuario.findAll({
                include: ["permisos"],
            })

            .then(users => {

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
    
                    return res.render("login", {errors: [{msg: "Credenciales invalidas"}], userALoguearse});  
                
                } 
    
                req.session.userLogueado = userALoguearse;  //si encontró al usuario lo guardo en session
    
                if(req.body.recordarme){ //si el checkbox de recordarme es distinto de undefined (quiere decir si está tildado)
    
                    res.cookie("recordarme", userALoguearse.email, {maxAge: 90000}) 
                    //creamos la cookie recordarme con el valor del email del userALoguearse y una duracion de la cookie de 60seg
    
                }
    
                res.redirect("/")
            })
        }
    },

    
    register: (req, res) => {
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        res.render("register.ejs", {userALoguearse});
    },

    processRegister: async (req, res) => {
        try {
            const userALoguearse = req.session.userLogueado;
    
            // Crear el usuario en la base de datos utilizando Sequelize
            const usuarioCreado = await db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                imagen: req.file ? req.file.filename : "/img/default.jpg",
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                permiso_id: 2 // Asegúrate de establecer el permiso_id aquí
            });
    
            res.redirect("/users/perfil/" + usuarioCreado.id);
        } catch (error) {
            console.error("Error al crear el usuario:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
    

    perfil: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado
       
        let userId = req.params.id

        db.Usuario.findByPk(userId)

        .then(usuario => {
            return res.render("perfil-user.ejs", {usuario, userALoguearse})})

        .catch(error => res.send(error))

	},


    edit: (req, res) => {
        try {
            // Usuario que se ha logueado
            const userALoguearse = req.session.userLogueado;
    
            // Traer los usuarios desde la base de datos
            db.Usuario.findByPk(req.params.id)
                .then(userToEdit => {
                    if (!userToEdit) {
                        return res.status(404).send("Usuario no encontrado");
                    }
    
                    // Renderizar la vista de edición con los datos del usuario y el usuario logueado
                    res.render("edit-user", { userToEdit, userALoguearse });
                })
                .catch(error => {
                    console.error("Error al buscar el usuario:", error);
                    res.status(500).send("Error interno del servidor");
                });
        } catch (error) {
            console.error("Error al editar el usuario:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
    
        
    processEdit: async (req, res) => {
        try {
            // Usuario que se ha logueado
            const userALoguearse = req.session.userLogueado;
    
            // Busco al usuario a editar por ID en la base de datos
            const userToEdit = await db.Usuario.findByPk(req.params.id);
    
            if (!userToEdit) {
                return res.status(404).send("Usuario no encontrado");
            }
    
            // Actualizar los campos del usuario
            userToEdit.nombre = req.body.nombre;
            userToEdit.apellido = req.body.apellido;
            userToEdit.imagen = req.file ? req.file.filename : userToEdit.imagen;
            userToEdit.email = req.body.email;
            userToEdit.password = bcrypt.hashSync(req.body.password, 10);
            userToEdit.permiso_id =  2


            // Realizar validaciones con la información del request
            const validationResults = validationResult(req);
    
            if (validationResults.errors.length > 0) { // Si hubo errores de validación
                // Renderizar la vista de edición con los errores y los datos completados correctamente
                return res.render("edit-user", { errors: validationResults.mapped(), userToEdit: req.body, userALoguearse });
            }
    
            // Guardar los cambios en la base de datos
            await userToEdit.save();
    
            res.redirect("/");
        } catch (error) {
            console.error("Error al editar el usuario:", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    logout: (req, res) => {
        // Limpiar cookie si existe
        if (req.cookies.recordarme) {
            res.clearCookie("recordarme");
        }
        //debug que devuelve correcto el usuario
        //console.log(req.session.userLogueado);

        // Si existe elimino la sesión
        if (req.session && req.session.userLogueado) {
            // Elimino los datos de la sesión
            req.session.destroy(err => {
                if (!err) {
                   res.redirect("/");
                } else {
                   console.error("Error al cerrar sesión", err);
                   res.redirect("/");
                }
            });
        } else {
            // Si no hay sesión, redirige
            res.redirect("/");
        };

    },

    carrito2: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        //Productos con descuento de perro
        db.Producto.findAll({
            include: ["tipos_mascota"],
            where: {
                tipo_mascota_id: 1,  // ID de perro de SQL
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            limit: 6
        })

        .then(productosConDescuentoGato => {
                return res.render('carrito2.ejs', {userALoguearse, productosConDescuentoGato})
        })

    },

    /* carrito : (req, res) => {

        //METODO CON JSONS

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});

        res.render('carrito2.ejs', {productosPerroConDescuento, userALoguearse});
    }, */

    /* perfil: (req, res) => {

        //METODO CON JSONS

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado
       
        //traigo los usuarios
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        //busco al usuario a editar por id
		const userToEdit = users.find(user => {return user.id == req.params.id})

		res.render("perfil-user", {userToEdit, userALoguearse});
	}, */

    /* processLogin: (req, res) => {

        //METODO CON JSONS

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

            if(userALoguearse == undefined){  //si no encontró al usuario le manda el mensaje de credenciales invalidas

                return res.render("login", {errors: [{msg: "Credenciales invalidas"}], userALoguearse});  
            
            } 

            req.session.userLogueado = userALoguearse;  //si encontró al usuario lo guardo en session

            if(req.body.recordarme){ //si el checkbox de recordarme es distinto de undefined (quiere decir si está tildado)

                res.cookie("recordarme", userALoguearse.email, {maxAge: 90000}) 
                //creamos la cookie recordarme con el valor del email del userALoguearse y una duracion de la cookie de 60seg

            }

            res.redirect("/")

        }

    }, */


}

module.exports = userController;