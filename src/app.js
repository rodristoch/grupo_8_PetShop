// ************ Require's ************
const express = require("express"); //para requerir express
const path = require("path"); 
const methodOverride = require('method-override');   //para requerir path (para hacer un ruteo mas sencillo para express)
const session = require("express-session");
const cookieParser = require("cookie-parser")
const cors = require ('cors');

// *********** Middleware recordarme module *************
const recordarme = require("./middlewares/recordarme.js");

// ************ express()************
const app = express();  //ejecuto express

// ************ Cors()************
app.use(cors())

// ************ Middlewares ************
app.use(express.static(path.resolve(__dirname, "../public")));// uso de la carpeta public
app.use(express.urlencoded({extended: false})) //toma los datos del body
app.use(express.json()) //analiza si es JSON y lo convierte a objeto de JS
app.use(methodOverride("_method")) //Para poder usar los métodos PUT y DELETE
app.use(session({secret: "Es secreto!!"}));
app.use(cookieParser())
app.use(recordarme)


// ************ Template Engine  ************
app.set('view engine', 'ejs'); // configuramos ejs como motor de plantilla 
app.set('views', './src/views') // indicamos a express que los archivos ejs por defecto los debe buscar en la carpeta src-views 

// ************ Route System  ************
const mainRoutes = require('./routes/mainRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js')

// ************ API Route System  ************
const apiUserRoutes = require('./routes/api/users.js')
const apiProductRoutes = require('./routes/api/products.js')
const apiCategoryRoutes = require('./routes/api/categories.js')


app.use("/", mainRoutes); 
app.use("/users", userRoutes); 
app.use("/productos", productRoutes);

app.use("/api/usuarios", apiUserRoutes); 
app.use("/api/productos", apiProductRoutes);
app.use("/api/categorias", apiCategoryRoutes);

// ************ Server  ************
app.listen (3100, () => console.log("Servidor corriendo en puerto 3100"));           //levanto el servidor y lo pongo a escuchar

