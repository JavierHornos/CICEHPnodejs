//const db = require('../database/models');
//db.usuarios.findAll().then((listaUsuarios) =>{
//    console.log(listaUsuarios)
//    });



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

   leermas: (req, res) => {
    res.render('leermas')
   },

   leermas2: (req, res) => {
    res.render('leermas2')
   },

   leermas3: (req, res) => {
    res.render('leermas3')
   },

   leermas4: (req, res) => {
    res.render('leermas4')
   },

   docencia: (req, res) => {
    res.render('docencia')
   }

}


module.exports = controlador;