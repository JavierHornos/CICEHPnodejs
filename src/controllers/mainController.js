const db = require('../database/models');
let fs = require('fs-extra');
//db.publicaciones.findAll().then((listaUsuarios) =>{
//    console.log(listaUsuarios)
//    })


const cloudinary = require('cloudinary')
cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
});



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

  /*detalleActividades: async (req, res) => {
    await db.publicaciones.findByPk(req.params.id)
          .then(function(investigacionDetallado) {
            console.log(investigacionDetallado)
            res.render("./detalle-actividades-admin", { investigacionDetallado: investigacionDetallado });
          }) 
    },*/

    detalleActividades: async (req, res) => {
      await db.publicaciones.findByPk(req.params.id)
        .then(function(investigacionDetallado) {
          investigacionDetallado.imagen = JSON.parse(investigacionDetallado.imagen);
          //console.log(investigacionDetallado)
          res.render("./detalle-actividades-admin", { investigacionDetallado: investigacionDetallado });
        })
    },


    editarActividades: async (req, res) => {
      //console.log("editarProducto")
await db.publicaciones.findByPk(req.params.id)
     .then(function(productoDetallado) {
      productoDetallado.imagen = JSON.parse(productoDetallado.imagen);
       //console.log(productoDetallado)
       res.render("editar-actividades", { producto_detallado: productoDetallado });
     }) 

},


actualizarActividades: async (req, res) =>{

  const id = (req.params.id);
    const actividad = await db.publicaciones.findByPk(id);
    const datos = req.body;


    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path)
      await actividad.update({ ...datos, imagen: result.url });
      if (fs.existsSync(req.file.path)) {
        await fs.unlink(req.file.path);
      }
      res.redirect('../');
    
    } else if (req.files) {
             
              let lugar = req.files
              const paths = lugar.map((archivo) => archivo.path);
              const urls = [];
              for (const image in paths) {
              let result = await cloudinary.v2.uploader.upload(paths[image]);
              urls.push(result.url);
              }
              const urlsString = JSON.stringify(urls);
              await actividad.update({ ...datos, imagen: urlsString });
              await Promise.all(req.files.map((file) => {
                if (fs.existsSync(file.path)) {
                  return fs.unlink(file.path);
                }
              }));
              res.redirect('../');
                 
    } else {
      await actividad.update({ ...datos, imagen: null });
      res.redirect('../');
    }
    
   
},


borrarActividades: (req, res) => {

  db.publicaciones.findByPk(req.params.id)
  .then(function(productoDetallado) {
        console.log(productoDetallado)
     db.publicaciones.destroy({
        where: {
          id: req.params.id
        }
      })

    });
    res.redirect (302, '../../') 

         
},


   

  
  

  
   publicaciones: async (req, res) => {

    await db.publicaciones.findAll().then((listaProductos) =>{
      let soloPublicaciones = listaProductos.filter((prod) => prod.categoria  == 2);
      //console.log(soloPublicaciones)
           res.render('publicaciones',{soloPublicaciones: soloPublicaciones});
      });
    },


    detallePublicaciones: async (req, res) => {
      await db.publicaciones.findByPk(req.params.id)
            .then(function(investigacionDetallado) {
              //console.log(investigacionDetallado)
              res.render("./detalle-publicaciones-admin", { investigacionDetallado: investigacionDetallado });
            }) 
      },

      editarPublicaciones: async (req, res) => {
        //console.log("editarProducto")
await db.publicaciones.findByPk(req.params.id)
       .then(function(productoDetallado) {
         //console.log(productoDetallado)
         res.render("editar-publicaciones", { producto_detallado: productoDetallado });
       }) 

},

actualizarPublicaciones: async (req, res) =>{
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


borrarPublicaciones: (req, res) => {

  db.publicaciones.findByPk(req.params.id)
  .then(function(productoDetallado) {
        console.log(productoDetallado)
     db.publicaciones.destroy({
        where: {
          id: req.params.id
        }
      })

    });
    res.redirect (302, '../../') 

         
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


    editarInvestigaciones: async (req, res) => {
      //console.log("editarProducto")
await db.publicaciones.findByPk(req.params.id)
     .then(function(productoDetallado) {
       //console.log(productoDetallado)
       res.render("editar-investigaciones", { producto_detallado: productoDetallado });
     }) 

},

actualizarInvestigaciones: async (req, res) =>{
  //console.log("actualizarProducto")
            let datos = req.body
            //console.log(datos)
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
            "tituloLeerMas": datos.tituloLeerMas,
            "subTituloLeerMas": datos.subTituloLeerMas,
            "parrafoUnoLeerMas": datos.parrafoUnoLeerMas,
            "parrafoDosLeerMas": datos.parrafoDosLeerMas,
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


borrarInvestigaciones: (req, res) => {

  db.publicaciones.findByPk(req.params.id)
  .then(function(productoDetallado) {
        console.log(productoDetallado)
     db.publicaciones.destroy({
        where: {
          id: req.params.id
        }
      })

    });
    res.redirect (302, '../../') 

         
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
          console.log(productoDetallado)
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