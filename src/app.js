// ************ Require's ************
const express = require("express"); //para requerir express
// ¿que es esta linea? const { get } = require("http");
const path = require("path"); 
const methodOverride = require('method-override');   //para requerir path (para hacer un ruteo mas sencillo para express)
const session = require("express-session");
const cookieParser = require("cookie-parser")

// *********** Middleware recordarme module *************
const recordarme = require("./middlewares/recordarme.js");

// ************ express()************
const app = express();                                                               //ejecuto express

// ************ Middlewares ************
app.use(express.static(path.resolve(__dirname, "../public")));// uso de la carpeta public
app.use(express.urlencoded({extended: false})) //toma los datos del body
app.use(express.json()) //analiza si es JSON y lo convierte a objeto de JS
app.use(methodOverride("_method")) //Para poder usar los métodos PUT y DELETE
app.use(session({
    secret: '1234567890',
    resave: false,
    saveUninitialized: false
  }));
  
app.use(cookieParser())
app.use(recordarme)


// ************ Template Engine  ************
app.set('view engine', 'ejs'); // configuramos ejs como motor de plantilla 
app.set('views', './src/views') // indicamos a express que los archivos ejs por defecto los debe buscar en la carpeta src-views 

// ************ Route System  ************
const mainRoutes = require('./routes/mainRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js')


app.use("/", mainRoutes); 
app.use("/users", userRoutes); 
app.use("/productos", productRoutes);

// ************ Server  ************
app.listen (3100, () => console.log("Servidor corriendo en puerto 3100"));           //levanto el servidor y lo pongo a escuchar

