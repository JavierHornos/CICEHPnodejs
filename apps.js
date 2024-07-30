const express = require("express");
const app = express();
const path = require('path')



const methodOverride =  require('method-override');
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

const session = require('express-session');                     // express-session
const MemoryStore = require('memorystore')(session)
app.use(session({
   cookie: { maxAge: 86400000 },
   store: new MemoryStore({
     checkPeriod: 86400000 // prune expired entries every 24h
   }),
   resave: false,
   saveUninitialized: false, 
   secret: 'secreto'
}))

const cookieParser = require('cookie-parser');                  //cookie parser
app.use(cookieParser());

const cors = require('cors');
app.use(cors())

app.use(express.urlencoded({ extended: false }));  // necesario para recibir la info que viaja en un formulario
app.use(express.json());








const mainRoutes = require('./src/routers/mainRoutes');


//LEVANTANDO SERVIDOR
const PORT = process.env.PORT || 3100      
app.listen(PORT, function() {                           
   console.log(`Levantando un servidor con Express en el puerto ${PORT}`);
})


//CARPETAS 
app.use(express.static(path.join(__dirname, 'plubic')));
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(__dirname +'/views'));
app.use(express.static('public'));                    //public
app.set('views', './src/views');                      //views
app.set('view engine', 'ejs')                         //ejs


//RUTAS
app.use('/', mainRoutes);
app.use('/about', mainRoutes)
app.use('/actividades', mainRoutes)
app.use('/publicaciones', mainRoutes)
app.use('/investigaciones', mainRoutes)
app.use('/leermas', mainRoutes)
app.use('/leermas2', mainRoutes)
app.use('/leermas3', mainRoutes)
app.use('/leermas4', mainRoutes)
app.use('/docencia', mainRoutes)

app.use('*', function(req, res) {
   res.render("./error-404")
});
