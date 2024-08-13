const db = require('../database/models');
//db.publicaciones.findAll().then((listaUsuarios) =>{
//    console.log(listaUsuarios)
//    })



const controlador = {

       
  
    home: async (req, res) => {
    await db.publicaciones.findAll().then((listaProductos) => {
      let soloActividades = listaProductos.filter((prod) => prod.categoria == 5);

      soloActividades = soloActividades.map((actividad) => {
        actividad.imagenes = JSON.parse(actividad.imagen);
        //console.log(soloActividades)
        return actividad;
        
      });
      
      //console.log(soloActividades);
      res.render('home', { soloActividades: soloActividades });
    });
  },




   about: (req, res) => {
    res.render('about')
   },

   actividades: async (req, res) => {
    await db.publicaciones.findAll().then((listaProductos) => {
      let soloActividades = listaProductos.filter((prod) => prod.categoria == 1);

      soloActividades = soloActividades.map((actividad) => {
        actividad.imagenes = JSON.parse(actividad.imagen);
        //console.log(soloActividades)
        return actividad;
        
      });
      
      //console.log(soloActividades);
      res.render('actividades', { soloActividades: soloActividades });
    });
  },
  

  
   publicaciones: async (req, res) => {

    await db.publicaciones.findAll().then((listaProductos) =>{
      let soloPublicaciones = listaProductos.filter((prod) => prod.categoria  == 2);
      //console.log(soloPublicaciones)
           res.render('publicaciones',{soloPublicaciones: soloPublicaciones});
      });
    },

       investigaciones: async (req, res) => {
      await db.publicaciones.findAll().then((listaProductos) =>{
        let soloInvestigacion = listaProductos.filter((prod) => prod.categoria  == 3);
        //console.log(soloInvestigacion)
             res.render('investigaciones',{soloInvestigacion: soloInvestigacion});
        });
      },

      detalleInvestigacion: async (req, res) => {
            await db.publicaciones.findByPk(req.params.id)
            .then(function(investigacionDetallado) {
              //console.log(investigacionDetallado)
              res.render("./leermas", { investigacionDetallado: investigacionDetallado });
            }) 
    },

  
       docencia: async (req, res) => {
    await db.publicaciones.findAll().then((listaProductos) =>{
      let soloDocencia = listaProductos.filter((prod) => prod.categoria  == 4);
          //console.log(soloDocencia)
           res.render('docencia',{soloDocencia: soloDocencia});
      });
    },

    detalleDocencia: async (req, res) => {
      await db.publicaciones.findByPk(req.params.id)
            .then(function(investigacionDetallado) {
              //console.log(investigacionDetallado)
              res.render("./detalle-docencia-admin", { investigacionDetallado: investigacionDetallado });
            }) 
      },

  //* EDITAR Y ACTUALIZAR *//
  editarProducto: async (req, res) => {
            //console.log("editarProducto")
    await db.publicaciones.findByPk(req.params.id)
           .then(function(productoDetallado) {
             //console.log(productoDetallado)
             res.render("editar-docencia", { producto_detallado: productoDetallado });
           }) 

   },

   actualizarProducto: async (req, res) =>{
    //console.log("actualizarProducto")
              let datos = req.body
     await db.publicaciones.findByPk(req.params.id)
             .then(function(productoDetallado) {
              //console.log(productoDetallado)
              
             db.publicaciones.update({   
              "titulo": datos.titulo,
              "descripcion": datos.descripcion,
              "link": datos.link,
              "imagen": null,
              "fecha_creacion": datos.fecha_creacion,
              "fecha_modificacion": null,
              "fecha_borrado": null,
              "categoria": datos.categoria,
              "tituloLeerMas": null,
              "subTituloLeerMas": null,
              "parrafoUnoLeerMas": null,
              "parrafoDosLeerMas": null,
              "tema": null,
              "nombre": null,
              "fuente": null,
         },{
             where: {
             id: req.params.id
                 }    
        }) 

      });
    // await fs.unlink(req.file.path)
    //console.log("estamos en actualizar producto")
      res.redirect (302, '../../') 
		
  },



  borrarDocencia: (req, res) => {

    db.publicaciones.findByPk(req.params.id)
    .then(function(productoDetallado) {
          //console.log(productoDetallado)
       db.publicaciones.destroy({
          where: {
            id: req.params.id
          }
        })

      });
      res.redirect (302, '../../') 

           
  },


}


module.exports = controlador;