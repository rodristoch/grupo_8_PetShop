const express = require("express");                                          //para requerir express

const path = require("path");                                                //para requerir path (para hacer un ruteo mas sencillo para express)


const app = express();                                                       //ejecuto express


app.listen (3100, () => console.log("Servidor corriendo en puerto 3100"));   //levanto el servidor y lo pongo a escuchar


app.get("/", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "./views/home.html"));              //mando al root del sitio el archivo home.html q está dentro de la carpeta views

});

app.use(express.static(path.resolve(__dirname, "../public")));               //para hacer uso de la carpeta public


//console.log(path.resolve(__dirname, "../public"))                          //para comprobar la ruta de la carpeta public

//console.log(path.resolve(__dirname, "./views/home.html"))                  //para comprobar la ruta del archivo html dentro de carpeta views