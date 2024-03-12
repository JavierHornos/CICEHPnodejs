const express = require("express");
const app = express();
const mainRoutes = require('./src/routers/mainRoutes');


//LEVANTANDO SERVIDOR
const PORT = process.env.PORT || 3100      
app.listen(PORT, function() {                           
   console.log(`Levantando un servidor con Express en el puerto ${PORT}`);
})


//CARPETAS 
app.use(express.static('public'));                    //public
app.set('views', './src/views');                      //views
app.set('view engine', 'ejs')                         //ejs


//RUTAS
app.use('/', mainRoutes);
app.use('/about', mainRoutes)
app.use('/actividades', mainRoutes)
app.use('/publicaciones', mainRoutes)
app.use('/investigaciones', mainRoutes)
app.use('/docencia', mainRoutes)
