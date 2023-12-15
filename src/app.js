const express = require("express");                                                  //para requerir express
const { get } = require("http");

const path = require("path");                                                        //para requerir path (para hacer un ruteo mas sencillo para express)

// ************ express()************
const app = express();                                                               //ejecuto express

// ************ Middlewares ************

// ************ Template Engine  ************
app.set('view engine', 'ejs'); // configuramos ejs como motor de plantilla 
app.set('views', './src/views') // indicamos a express que los archivos ejs por defecto los debe buscar en la carpeta src-views 


app.use(express.static(path.resolve(__dirname, "../public")));     //para hacer uso de la carpeta public

// ************ Route System  ************
const mainRoutes = require('./routes/mainRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js')

app.use("/", mainRoutes); 
app.use("/users", userRoutes); 
app.use("/productos", productRoutes);

/* app.get("/home", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/home.html"));           

}); */

app.listen (3100, () => console.log("Servidor corriendo en puerto 3100"));           //levanto el servidor y lo pongo a escuchar

