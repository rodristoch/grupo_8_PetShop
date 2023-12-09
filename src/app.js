const express = require("express");                                                  //para requerir express
const { get } = require("http");

const path = require("path");                                                        //para requerir path (para hacer un ruteo mas sencillo para express)


const app = express();                                                               //ejecuto express

const mainRoutes = require('./routes/mainRoutes.js')

app.listen (3100, () => console.log("Servidor corriendo en puerto 3100"));           //levanto el servidor y lo pongo a escuchar


/* app.get("/home", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/home.html"));           

}); */

app.get("/", mainRoutes); //mando al root del sitio el archivo home.html q está dentro de la carpeta views

app.get("/register", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/register.html"));                  //mando al root del sitio el archivo register.html q está dentro de la carpeta views

});

app.get("/login", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/login.html"));                  //mando al root del sitio el archivo register.html q está dentro de la carpeta views

});

app.get("/categoria", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/categoria.html"));                  //mando al root del sitio el archivo register.html q está dentro de la carpeta views

});

app.get("/detalles-del-producto", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/detalles-del-producto.html"));     //mando al root del sitio el archivo detalles-del-producto.html q está dentro de la carpeta views

});         
app.get("/carrito", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/carrito.html"));  

}); 

app.use(express.static(path.resolve(__dirname, "../public")));                       //para hacer uso de la carpeta public


app.set('view engine', 'ejs'); // configuramos ejs como motor de plantilla 

app.set('views', './src/views') // indicamos a express que los archivos ejs por defecto los debe buscar en la carpeta src-views 