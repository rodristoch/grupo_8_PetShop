const { log } = require("console");
const fs = require("fs");
const path = require("path")
const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

//base de datos de productos
/* const productsFilePath = path.join(__dirname, "../data/productosDataBase.json"); */
/* const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */


const productController = {

    productos : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let productosPerro = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 2,
            },
            limit: 4
        })

        let productosGato = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 1,
            },
            limit: 4
        })

        Promise.all([productosPerro, productosGato])

        .then(([productosPerro, productosGato]) => {
            res.render('productos.ejs', {productosPerro, productosGato, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });


    },

    categoriaPerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let perroVisible = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 2,
            },
            limit: 8
        })

        let perroInvisible = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 2,
                id: {[Op.gt]: 46}
            },
        })

        let checkboxComidaPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }
        })

        let checkboxAccesorioPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }
        })

        let checkboxHigienePerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }
        })

        let checkboxJuguetePerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }
        })

        Promise.all([perroVisible, perroInvisible, checkboxComidaPerro, checkboxAccesorioPerro, checkboxHigienePerro, checkboxJuguetePerro])

        .then(([perroVisible, perroInvisible, checkboxComidaPerro, checkboxAccesorioPerro, checkboxHigienePerro, checkboxJuguetePerro]) => {
            res.render('categoria.ejs', {perroVisible, perroInvisible, checkboxComidaPerro, checkboxAccesorioPerro, checkboxHigienePerro, checkboxJuguetePerro, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });


    },

    categoriaGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let gatoVisible = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 1,
            },
            limit: 8
        })

        let gatoInvisible = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 1,
                id: {[Op.gt]: 8}
            },
        })

        Promise.all([gatoVisible, gatoInvisible])

        .then(([gatoVisible, gatoInvisible]) => {
            res.render('categoria.ejs', {gatoVisible, gatoInvisible, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });


    },

    promociones : (req, res) => {

        //CON DB SQL
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let productosPerroConDescuento = db.Producto.findAll({
            include: [
                {
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
            ],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            limit: 4
        })

        let productosGatoConDescuento = db.Producto.findAll({
            include: [
                {
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
            ],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            limit: 4
        })

        Promise.all([productosPerroConDescuento, productosGatoConDescuento])

        .then(([productosPerroConDescuento, productosGatoConDescuento]) => {
            return res.render("promociones.ejs", {userALoguearse, productosPerroConDescuento, productosGatoConDescuento})
        })

    },

    promocionesPerro : (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        //Productos con descuento de perro
        db.Producto.findAll({
            include: [
                {
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
            ],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            }
        })
            
        .then(productosPerroConDescuento => {
            /* res.send(productosPerroConDescuento) */
                return res.render("promocionesTodas.ejs", {userALoguearse, productosPerroConDescuento})
        })
        
    },

    promocionesGato : (req, res) => {

        //CON DB SQL
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let promocionesGatoVisible = db.Producto.findAll({
            include: [
                {
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
            ],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            limit: 8
        })

        let promocionesGatoInvisible = db.Producto.findAll({
            include: [
                {
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
            ],
            where: {
                tipo_mascota_id: 1,
                id: {[Op.gt]: 27}
            }
            
        })

        Promise.all([promocionesGatoVisible, promocionesGatoInvisible])
            
        .then(([promocionesGatoVisible, promocionesGatoInvisible]) => {
            return res.render("promocionesTodas.ejs", {promocionesGatoVisible, promocionesGatoInvisible, userALoguearse})
        })

    },

    comidaPerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let comidaPerroVisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 1   /* id comida */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 2,
            },
            limit: 8
        })

        let comidaPerroInvisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 1   /* id comida */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 2,
                id: {[Op.gt]: 56}
            }
            
        })

        Promise.all([comidaPerroVisible, comidaPerroInvisible])
            
        .then(([comidaPerroVisible, comidaPerroInvisible]) => {
            return res.render('categoria.ejs', {comidaPerroVisible, comidaPerroInvisible, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
        
        
    },

    comidaGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let comidaGatoVisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 1   /* id comida */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 1,
            },
            limit: 8
        })

        let comidaGatoInvisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 1   /* id comida */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 1,
                id: {[Op.gt]: 16}
            }
            
        })

        Promise.all([comidaGatoVisible, comidaGatoInvisible])
            
        .then(([comidaGatoVisible, comidaGatoInvisible]) => {
            return res.render('categoria.ejs', {comidaGatoVisible, comidaGatoInvisible, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });

    },

    accesoriosPerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let accesoriosPerroVisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 2  /* id accesorio */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 2,
            },
            limit: 8
        })

        let accesoriosPerroInvisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 2  /* id accesorio */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 2,
                id: {[Op.gt]: 46}
            }
            
        })

        Promise.all([accesoriosPerroVisible, accesoriosPerroInvisible])
            
        .then(([accesoriosPerroVisible, accesoriosPerroInvisible]) => {
            return res.render('categoria.ejs', {accesoriosPerroVisible, accesoriosPerroInvisible, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    accesoriosGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 2  /* id accesorio */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 1,
            }
        })

        .then(accesoriosGato => {
            return res.render('categoria.ejs', {accesoriosGato, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });
    },

    higienePerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let higienePerroVisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 3  /* id higiene */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 2,
            },
            limit: 8
        })

        let higienePerroInvisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 3  /* id higiene */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 2,
                id: {[Op.gt]: 67}
            }
            
        })

        Promise.all([higienePerroVisible, higienePerroInvisible])
            
        .then(([higienePerroVisible, higienePerroInvisible]) => {
            return res.render('categoria.ejs', {higienePerroVisible, higienePerroInvisible, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    higieneGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let higieneGatoVisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 3  /* id higiene */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 1,
            },
            limit: 8
        })

        let higieneGatoInvisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 3  /* id higiene */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 1,
                id: {[Op.gt]: 26}
            }
            
        })

        Promise.all([higieneGatoVisible, higieneGatoInvisible])
            
        .then(([higieneGatoVisible, higieneGatoInvisible]) => {
            return res.render('categoria.ejs', {higieneGatoVisible, higieneGatoInvisible, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    juguetesPerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let juguetesPerroVisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 4  /* id juguete */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 2,
            },
            limit: 8
        })

        let juguetesPerroInvisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 4  /* id juguete */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 2,
                id: {[Op.gt]: 76}
            }
            
        })

        Promise.all([juguetesPerroVisible, juguetesPerroInvisible])
            
        .then(([juguetesPerroVisible, juguetesPerroInvisible]) => {
            return res.render('categoria.ejs', {juguetesPerroVisible, juguetesPerroInvisible, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    juguetesGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let juguetesGatoVisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 4  /* id juguete */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 1,
            },
            limit: 8
        })

        let juguetesGatoInvisible = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 4  /* id juguete */
                    }
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                }
            ],
            where: {
                tipo_mascota_id: 1,
                id: {[Op.gt]: 37}
            }
            
        })

        Promise.all([juguetesGatoVisible, juguetesGatoInvisible])
            
        .then(([juguetesGatoVisible, juguetesGatoInvisible]) => {
            return res.render('categoria.ejs', {juguetesGatoVisible, juguetesGatoInvisible, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    marcas: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let eukanuba = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 12
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        let proplan = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 5
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        let royal = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 11
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        let cancat = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 4
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        let catit = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 16
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        Promise.all([eukanuba, proplan, royal, cancat, catit])

        .then(([eukanuba, proplan, royal, cancat, catit]) => {
            return res.render("marcas.ejs", {userALoguearse, eukanuba, proplan, royal, cancat, catit})
        })

    },

    eukanuba: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 12,
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
        })

        .then(ProductosEukanuba => {return res.render("marcasTodas.ejs", {userALoguearse, ProductosEukanuba})})

    },

    proplan: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 5
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }]
        })

        .then(ProductosProplan => {return res.render("marcasTodas.ejs", {userALoguearse, ProductosProplan})})

    },

    royal: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 11
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }]
        })

        .then(ProductosRoyal => {return res.render("marcasTodas.ejs", {userALoguearse, ProductosRoyal})})

    },

    cancat: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 4
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }]
        })

        .then(ProductosCancat => {return res.render("marcasTodas.ejs", {userALoguearse, ProductosCancat})})

    },

    catit: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 16
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }]
        })

        .then(ProductosCatit => {return res.render("marcasTodas.ejs", {userALoguearse, ProductosCatit})})

    },

    alta2: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        //Productos con descuento de perro
        let productos = db.Producto.findAll();
        let tipos = db.TipoMascota.findAll();
        let marcas = db.Marca.findAll();
        let categorias = db.Categoria.findAll();
        let descuentos = db.Descuento.findAll();

        Promise.all([productos, tipos, marcas, categorias, descuentos])
        .then(([editarProducto, tipos, marcas, categorias, descuentos]) => {
                return res.render('alta-producto.ejs', {editarProducto, tipos, marcas, categorias, descuentos, userALoguearse})
        })
    },

    crearProducto2: function (req,res) {

       //usuario q se loguea
       const userALoguearse = req.session.userLogueado

       db.Producto.create(
           {
               nombre: req.body.nombre_producto,
               descripcion: req.body.descripcion,
               color: req.body.color_producto,
               peso: req.body.peso_producto,
               precio: req.body.precio_producto,
               imagen: req.file != undefined ? req.file.filename : "/img/Producto.webp",
               tipo_mascota_id: req.body.tipo_mascota_id,
               marca_id: req.body.marca_id
            })
            
        .then(() => {res.redirect("/")})
    },

    editar : (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        let productos = db.Producto.findByPk(productoId, {
            include: [{
                model: db.TipoMascota,
                as: 'tipos_mascota',
            },
            {
                model: db.Marca,
                as: 'marcas',
            },
            {
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],

        });
        let tipos = db.TipoMascota.findAll();
        let marcas = db.Marca.findAll();
        let categorias = db.Categoria.findAll();
        let descuentos = db.Descuento.findAll();

        Promise.all([productos, tipos, marcas, categorias, descuentos])
        .then(([editarProducto, tipos, marcas, categorias, descuentos]) => {
            return res.render("editar-producto.ejs", {editarProducto, tipos, marcas, categorias, descuentos, userALoguearse})})
        .catch(error => res.send(error))
    },

    editarProducto: function (req,res) {

         //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        db.Producto.update(
            {
                nombre: req.body.nombre_producto,
                descripcion: req.body.descripcion,
                color: req.body.color_producto,
                peso: req.body.peso_producto,
                precio: req.body.precio_producto,
                imagen: req.file !=undefined ? req.file.filename : productoId.imagen,
                tipo_mascota_id: req.body.tipo_mascota_id,
                marca_id: req.body.marca_id
            },
            {
                where: {id: productoId}
            })
        .then(() => {
            return res.redirect("/")})            
        .catch(error => res.send(error))
    },

    DetalleProductosPerro: (req, res) => {

        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        let producto = db.Producto.findByPk(productoId, {
            include: ["tipos_mascota", 'descuentos', 'categorias']
        })

        let productosPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let comidaPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 1}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let higienePerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 3}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let accesorioPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 2}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let juguetePerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 4}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })
          
        Promise.all([producto, productosPerro, comidaPerro, higienePerro, accesorioPerro, juguetePerro])

        .then(([producto, productosPerro, comidaPerro, higienePerro, accesorioPerro, juguetePerro]) => {
            return res.render("detalle.ejs", {producto, productosPerro, comidaPerro, higienePerro, accesorioPerro, juguetePerro, userALoguearse})})
        .catch(error => res.send(error))

    },

    DetalleProductosGato: (req, res) => {

        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        let producto = db.Producto.findByPk(productoId, {
            include: ["tipos_mascota", 'descuentos', 'categorias']
        })

        let productosGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let comidaGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 1}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let higieneGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 3}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let accesorioGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 2}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let jugueteGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 4}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })
          
        Promise.all([producto, productosGato, comidaGato, higieneGato, accesorioGato, jugueteGato])

        .then(([producto, productosGato, comidaGato, higieneGato, accesorioGato, jugueteGato]) => {
            return res.render("detalle.ejs", {producto, productosGato, comidaGato, higieneGato, accesorioGato, jugueteGato, userALoguearse})})
        .catch(error => res.send(error))

    },
    
    detalle: (req, res) => {

        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        let producto = db.Producto.findByPk(productoId, {
            include: ["tipos_mascota", 'descuentos', 'categorias']
        })

        let comidaPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 1}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let comidaGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 1}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let higienePerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 3}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let higieneGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 3}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let accesorioPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 2}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let accesorioGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 2}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let juguetePerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 4}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let jugueteGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 4}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })
          
        Promise.all([producto, comidaPerro, comidaGato, higienePerro, higieneGato, accesorioPerro, accesorioGato, juguetePerro, jugueteGato])

        .then(([producto, comidaPerro, comidaGato, higienePerro, higieneGato, accesorioPerro, accesorioGato, juguetePerro, jugueteGato]) => {
            return res.render("detalle.ejs", {producto, comidaPerro, comidaGato, higienePerro, higieneGato, accesorioPerro, accesorioGato, juguetePerro, jugueteGato, userALoguearse})})
        .catch(error => res.send(error))
    },

    destroy: (req, res) => {

        let productoId = req.params.id;

        db.Producto.destroy({
            where: {
                id: productoId
            },
            force: true   // force: true es para asegurar que se ejecute la acción
        }) 
        .then(() => {
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    },

    buscar: async (req, res) => {
        const userALoguearse = req.session.userLogueado;
    
        try {
            const nombreProducto = req.body.producto;
            const Productos = await db.Producto.findAll({
                where: {
                    nombre: {
                        [Op.iLike]: `%${nombreProducto}%`
                    }
                }
            });
    
            Productos
                ? res.render("busqueda.ejs", { userALoguearse, Productos })
                : res.render("busqueda.ejs", { userALoguearse, Productos: [] });
        } catch (error) {
            console.error('Error en la búsqueda de productos:', error);
            res.status(500).send('Error en la búsqueda de productos.');
        }
    }

    /* alta : (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        res.render('alta-producto.ejs', {userALoguearse});
    }, */

    /* crearProducto: (req, res) => {

        // json de productos
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    
		// Crear el objeto literal (producto) a sumar al array

        const nuevoProducto = {
             id: productos [productos.length - 1].id +1,
             name: req.body.nombre_producto,
             description: req.body.descripcion ,
             image: req.file!= undefined ? req.file.filename : "No se subió imagen de producto",
             pet: req.body.mascota,
             category: req.body.categoria,
             colors: req.body.color_producto,
             weight: req.body.peso_producto ,
             price: req.body.precio_producto,
             quantity: req.body.cantidad_producto,
             discount: req.body.descuento 
        }

        productos.push(nuevoProducto);
        
       // Sobreescribir el archivo JSON
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));

        // Mostrar poducto creado

        res.redirect("/grupo_8_PetShop/src/views/detalles-del-producto.ejs" + nuevoProducto.id)
		
    }, */

    /* quitarProducto : (req, res) => {

        //CON LOS JSONS
        let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        //proceso de eliminación
        productos = productos.filter(producto => {
            return producto.id != req.params.id
        })

        //escribir archivo json
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "))
    }, */

    /* detalle : (req, res) => {
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado */
       /* console.log(usuario) */
        /* const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id */
        /* })

        // filtro de productos perro o gato
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

        //Conozco el producto que vino por id
        const detalleDeProductoActual = unProducto.id_pet; */
          
       // Función para encontrar 6 productos distintos para recomendados
       /*  let productosRecomendados = [];

        if (detalleDeProductoActual == "Perro") {
            
            //Ecuento el id maximo del json
            let maxID = Math.max(...productosPerro.map(item => item.id));

            //Set de 6 numeros aleatorios no repetidos
            let randomIDs = new Set();
            while (randomIDs.size < 6) {
                randomIDs.add(Math.floor(Math.random() * (maxID - 1)) + 1);
            }
        
            // Convierte los randomIDS a array
            randomIDs = Array.from(randomIDs);
        
            // Filtra los productosPerro según en los IDs aleatorios
            productosRecomendados = productosPerro.filter(item => randomIDs.includes(item.id));
            
            // Si la cantidad de productos recomendados es menor que 6, agrega productos adicionales
            while (productosRecomendados.length < 6) {
                productosRecomendados.push(productosPerro[Math.floor(Math.random() * productosPerro.length)])
        }

    } else if (detalleDeProductoActual == "Gato") {
        
       //encuentro el id máximo en el json
        let maxID= Math.max(...productosGato.map(item => item.id));

        //set de 6 numeros aleatorios no repetidos

        let randomIDS= new Set();
        while(randomIDS <6) {
            randomIDS.add(Math.floor(Math.random() * (maxID - 1)) + 1);
        }

        //Convierto el set en array
        randomIDS = Array.from(randomIDS);

        //filtro los productosGato según los IDS aleatorios
        productosRecomendados = productosGato.filter(item => randomIDS.includes(item.id));

        // Si la cantidad de productos recomendados es menor que 6, agrega productos adicionales
        while (productosRecomendados.length <6)
            productosRecomendados.push(productosGato[Math.floor(Math.random() * productosGato.length)])

        }
        res.render("detalles-del-producto.ejs", {unProducto, productosRecomendados, userALoguearse}); 
    },  */

    /* editarProducto: (req, res) => {
        // json de productos
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        //identificador de producto
        const id= req.params.id;
       
        let productoAEditar= productos.find(producto => producto.id == id);

        //Reemplazo de prodcuto

        const edicionProducto = {
            id: productoAEditar.id,
            name: req.body.nombre_producto,
            description: req.body.descripcion ,
            image: req.file !=undefined ? req.file.filename : productoAEditar.image,
            pet: req.body.mascota,
            category: req.body.categoria,
            colors: req.body.color_producto,
            weight: req.body.peso_producto ,
            price: req.body.precio_producto,
            quantity: req.body.cantidad_producto,
            discount: req.body.descuento
       }

       //Posicion producto editar y reemplazo
       let indice = productos.findIndex(producto => {return producto.id});
       productos[indice] = edicionProducto

       //Re-escritura producto
       fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "), "utf-8");
       res.redirect("/") // ¿A donde lo redirigimos?
    }, */

    /* editar : (req, res) => {

        //CON LOS JSONS
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        // Json con todos los productos
        let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        // Encontrar producto
        const editarProducto = productos.find( producto => {
            return producto.id == req.params.id
        })

        res.render('editar-producto.ejs', {editarProducto, userALoguearse});
    }, */

    /* promocionesGato: (req, res) => {

        //CON LOS JSONS
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos gatos
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

		//productos con descuentos de gatos
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render('promociones-gato.ejs', {productosGatoConDescuento, unProducto, userALoguearse});
    }, */

    /* promocionesPerro: (req, res) => { */

        //CON LOS JSONS
        /* //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});

        //productos con descuentos de perros
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
		
        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })

        res.render('promociones-perro.ejs', {productosPerroConDescuento, unProducto, userALoguearse});
    }, */

    /* promociones: (req, res) => {

        //CON LOS JSONS
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        //productos gatos
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

        //productos con descuentos de perros
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
		//productos con descuentos de gatos
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

        res.render('promociones.ejs', {productosPerroConDescuento, productosGatoConDescuento, userALoguearse});
    } */
}

module.exports = productController;