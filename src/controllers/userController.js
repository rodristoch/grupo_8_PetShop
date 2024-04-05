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
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                imagen: req.file ? req.file.filename : "/img/default.jpg",
                permiso_id: 2  //ID de invitado
            });

            //Validaciones con la info del request
            const validationResults = validationResult(req); 

            if(validationResults.errors.length > 0){ //si hubo errores de validacion

            //renderizo la vista y le mando la info q llega del formulario con los errores y la info bien completada
            res.render("register", {errors: validationResults.mapped(), oldData: req.body, userALoguearse});

            } else {  //si no hubo errores de validacion

                res.redirect("/users/perfil/" + usuarioCreado.id);
            }

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
            let usuarios = db.Usuario.findByPk(req.params.id, {
                include: ["permisos"]
            })

            let permisos = db.Permiso.findAll();

            Promise.all([usuarios, permisos])
                .then(([userToEdit, permisos]) => {
                    if (!userToEdit) { //si no encuentra al usuario
                        return res.status(404).send("Usuario no encontrado");
                    } else {
                        // Renderizar la vista de edición con los datos del usuario y el usuario logueado
                        res.render("edit-user", { userToEdit, permisos, userALoguearse });
                    }
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

    processEdit2: (req, res) => {

        // Usuario que se ha logueado
        const userALoguearse = req.session.userLogueado;

        let userToEdit = req.params.id;

        db.Usuario.update(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                imagen: req.file ? req.file.filename : userToEdit.imagen,
                permiso_id: req.body.permiso_id
            },
            {
                where: {id: userToEdit}
            })
            
            .then(() => {
                
                return res.redirect("/users/logout2")
                    
            });
             
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

    logout2: (req, res) => {
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
                   res.redirect("/users/login");
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

        let producto = db.Producto.findByPk(10, {
            include: ["tipos_mascota", 'descuentos', 'categorias']
        })

        //Productos con descuento
        let productosConDescuento = db.Producto.findAll({
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.TipoMascota,
                as: 'tipos_mascota',
            }],
            limit: 16
        })

        Promise.all([producto, productosConDescuento])

        .then(([producto, productosConDescuento]) => {
                return res.render('carrito2.ejs', {userALoguearse, producto, productosConDescuento})
        })

    },

    usuariosListado: async (req, res) => {
        try {
            // Usuario que se ha logueado
            const userALoguearse = req.session.userLogueado;
    
            // Consulta a la base de datos para obtener todos los usuarios
            const userAll = await db.Usuario.findAll();
    
            // Renderizar la vista con los datos obtenidos
     
            res.render('usuariosListado.ejs', { userALoguearse, users: userAll });
        } catch (error) {
            console.error('Error al recuperar listado de usuarios', error);
            res.status(500).send('Error al recuperar listado de usuarios');
        }
    }
    











    /* register: (req, res) => {

        //METODO CON JSONS

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        res.render("register.ejs", {userALoguearse});
    },

    processRegister: (req, res) => {

        //METODO CON JSONS

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        //traigo los usuarios
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        //creo uno nuevo
        const newUser = {
			id: users[users.length - 1].id + 1,
			nombre: req.body.nombre,
            apellido: req.body.apellido,
            image: req.file!= undefined ? req.file.filename : "/img/default.jpg",
			email: req.body.email, 
            password: bcrypt.hashSync(req.body.password, 10),
            category: "Invitado"
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

            res.redirect("/users/perfil/" + newUser.id) 

            
        }

    }, */

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

    /* edit: (req, res) => {

        //METODO CON JSONS

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado
       
        //traigo los usuarios
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        //busco al usuario a editar por id
		const userToEdit = users.find(user => {return user.id == req.params.id})

		res.render("edit-user", {userToEdit, userALoguearse});
	}, */
        

    /* processEdit: (req, res) => {

        //METODO CON JSONS

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
            image:  req.file!= undefined ? req.file.filename : userToEdit.image,
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
       
    }, */


}

module.exports = userController;