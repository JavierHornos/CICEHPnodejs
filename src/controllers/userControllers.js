let fs = require('fs-extra');
const path = require('path'); 
const { validationResult } = require('express-validator');
const bcrypt=require ('bcrypt')
const db = require('../database/models');
const cloudinary = require('cloudinary')
cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
});


const controladorUsers = 
{

       iniciarSesion: (req, res) => {       
        res.render('./users/login');
        },
        
        
        procesoSesion: (req, res) => {
                const resultValidation = validationResult(req); // resultados de errores de la validacion y lo guardamos en resultValidation

                if (resultValidation.errors.length > 0) {
                        return res.render ('./users/login', {errors: resultValidation.errors})
                }

                let datos = req.body                                                
                PasswordPlano = datos.Password;                                  
         
                db.usuarios.findAll().then((listaUsuarios) =>{
                let userToLogin = listaUsuarios.filter((prod) => prod.Email  == datos.Email);
                //console.log(userToLogin)

                if(userToLogin) {
                        for (let p of userToLogin) {
                        let PasswordHash = p.Password 
                        let isOkThePassword = bcrypt.compareSync(PasswordPlano, PasswordHash)
                        let administrador = p.Administrador
                        //console.log(administrador)
                        if (isOkThePassword) {
                                delete userToLogin.Password;
                                req.session.userLogged = userToLogin;
                                

                                if(req.body.recordame) {
                                      res.cookie('recordame', req.body.Email, { maxAge: (1000 * 60) * 5 })  
                                }

                                return res.redirect('./perfil')
                        } else {
                                return res.render('./users/login', {errors: {password: {msg: 'Password incorrecto'}}});
                        }
                }
                        } return res.render('./users/login', {errors: {email: {msg: 'Email no registrado'}}});

                });
        },



        perfil: (req, res) => {
                //console.log(req.session.userLogged)
                  
                  res.render('./users/perfil',  {usuarios: req.session.userLogged},)
                 
          },


        registrarse: (req, res) => {
                
                res.render("./users/registro");
        },  



        procesoRegistro: async (req, res) => {

                const resultValidation = validationResult(req); // resultados de errores de formulario y lo guardamos en errors

                if (resultValidation.errors.length > 0) {
                        return res.render ('./users/registro', {errors: resultValidation.errors})
                }


                let textoPlano = req.body.password; 
                //console.log(textoPlano)
                          
                let hash = bcrypt.hashSync(textoPlano, 10);

                let datos = req.body
                //console.log(datos)

                 
                await db.usuarios.create({
                        "Nombre": req.body.Nombre,
                        "Apellido": req.body.Apellido,
                        "Email": req.body.Email,
                        "Password": hash,
                        "Administrador": 0,                                                   
                });               

                res.redirect ('/users/login');
                //res.redirect('../') ;
        },


        desloguear: (req, res) => {
                res.clearCookie('recordame');
                req.session.destroy();
                return res.redirect('/');
        },

        crear: async (req, res) => {
               await res.render("./users/creacion-producto");
            },



        store: async (req,res) => {
                        

                if (req.file) {
                        //console.log("if req.file")
                        let datos = req.body;
                        //console.log(datos)  
                        const result = await cloudinary.v2.uploader.upload(req.file.path)
                        //console.log(result)
                        await db.publicaciones.create({
                                "titulo": datos.titulo,
                                "descripcion": datos.descripcion,
                                "link": datos.link,
                                "imagen": result.url,
                                "fecha_creacion": datos.fecha_creacion,
                                "fecha_modificacion": null,
                                "fecha_borrado": null,
                                "categoria": datos.categoria,
                                "tituloLeerMas": datos.tituloLeerMas,
                                "subTituloLeerMas": datos.subTituloLeerMas,
                                "parrafoUnoLeerMas": datos.parrafoUnoLeerMas,
                                "parrafoDosLeerMas": datos.parrafoDosLeerMas,
                                "tema": datos.tema,
                                "nombre": datos.nombre,
                                "fuente": datos.fuente,
                                 }); 

                        await fs.unlink(req.file.path) 
                        res.redirect('../') ;

                } if (req.files){
                        //console.log("if req.files")
                        let datos = req.body;
                        let lugar = req.files
                        //console.log(lugar)
                        const paths = lugar.map((archivo) => archivo.path);
                        const urls = [];
                                for (const image in paths) {
                                let result = await cloudinary.v2.uploader.upload(paths[image]);
                                urls.push(result.url);
                                }
                                const urlsString = JSON.stringify(urls);

                 await db.publicaciones.create({
                      "titulo": datos.titulo,
                      "descripcion": datos.descripcion,
                      "link": datos.link,
                      "imagen": urlsString,
                      "fecha_creacion": datos.fecha_creacion,
                      "fecha_modificacion": null,
                      "fecha_borrado": null,
                      "categoria": datos.categoria,
                      "tituloLeerMas": datos.tituloLeerMas,
                      "subTituloLeerMas": datos.subTituloLeerMas,
                      "parrafoUnoLeerMas": datos.parrafoUnoLeerMas,
                     "parrafoDosLeerMas": datos.parrafoDosLeerMas,
                     "tema": datos.tema,
                     "nombre": datos.nombre,
                     "fuente": datos.fuente,
                }); 
                        const borradoImagen = async () => {
                        for (const image in paths) {
                        let borrar = await fs.unlink(paths[image])                  
                         }
                 };
                        let borrado = await borradoImagen() 
                        res.redirect('../') ;

                } else {

                        let datos = req.body;
                        console.log("else")
                 await db.publicaciones.create({
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
                     "tema": datos.tema,
                     "nombre": datos.nombre,
                     "fuente": datos.fuente,
                }); 

                res.redirect('../')

                }

              },  
   
        
}

module.exports = controladorUsers;