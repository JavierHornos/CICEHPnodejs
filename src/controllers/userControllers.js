let fs = require('fs-extra');
const path = require('path'); 
const { validationResult } = require('express-validator');
const bcrypt=require ('bcrypt')
const db = require('../database/models');

//db.usuarios.findAll().then((listaUsuarios) =>{
//    console.log(listaUsuarios)
//    });




 
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
                console.log(textoPlano)
                          
                let hash = bcrypt.hashSync(textoPlano, 10);

                let datos = req.body
                console.log(datos)

                 
                db.usuarios.create({
                        "Nombre": req.body.Nombre,
                        "Apellido": req.body.Apellido,
                        "Email": req.body.Email,
                        "Password": hash,
                        "Administrador": 0,                                                   
                });               

                res.redirect ('/users/login');
        },


        desloguear: (req, res) => {
                res.clearCookie('recordame');
                req.session.destroy();
                
                return res.redirect('/');
        }
        
}

module.exports = controladorUsers;