const controladorUsers = require('./../controllers/userControllers')
const validacionLogin = require('../middlewares/validacionLogin')
const guestMiddleware = require('../middlewares/guestMiddleware')
const validacionRegistro = require('../middlewares/validacionRegistro')
const adminMiddleware = require('../middlewares/adminMiddleware')

const express = require ('express');
const router = express.Router();

//const multerAvatar = require('../middlewares/multerAvatar')



router.get('/login', validacionLogin, controladorUsers.iniciarSesion);
router.post('/login', controladorUsers.procesoSesion);     // sigue su ruta


router.get('/registro', guestMiddleware, controladorUsers.registrarse);
router.post('/registro', validacionRegistro, controladorUsers.procesoRegistro)


router.get ('/perfil', adminMiddleware, controladorUsers.perfil)

//router.get ('/editar-perfil', usersController.verPerfil)
//router.post ('/editar-perfil', multerAvatar.single('Imagen'), usersController.cambiarPerfil)


router.get ('/desloguear', controladorUsers.desloguear)


router.get('/check', function (req, res) {                                              // para chequear si estamos logueados ingresamos a users/check
    if (req.session.userLogged == undefined) {
        res.send('no estas logueado');
    } else {    
           let mailLogueado = req.session.userLogged
            for (let p of  mailLogueado)
                email = p.Email
                      
                res.send("El usuario logueado es " + email)
            } 
        });      








module.exports = router;