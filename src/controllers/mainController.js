const controlador = {
    
    home: (req, res) => {
        res.render('home') ;
   },

   about: (req, res) => {
    res.render('about')
   },

   actividades: (req, res) => {
    res.render('actividades')
   },

   publicaciones: (req, res) => {
    res.render('publicaciones')
   },

   investigaciones: (req, res) => {
    res.render('investigaciones')
   },

   docencia: (req, res) => {
    res.render('docencia')
   }

}


module.exports = controlador;