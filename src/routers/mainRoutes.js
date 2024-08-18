const mainController = require('./../controllers/mainController')
const adminMiddleware = require('../middlewares/adminMiddleware')
const RealAdmin = require('../middlewares/RealAdmin')
const multerProductos = require('../middlewares/multerProducto')


const express = require ('express');
const router = express.Router();



router.get ('/' , mainController.home)
router.get('/about', mainController.about)


router.get('/actividades', mainController.actividades)
router.get ('/detalle-actividades-admin/:id', adminMiddleware, RealAdmin, mainController.detalleActividades)
router.get('/editar-actividades/:id', adminMiddleware, RealAdmin, mainController.editarActividades)
router.post ('/editar-actividades/:id', adminMiddleware, RealAdmin, multerProductos.array('imagen'), mainController.actualizarActividades)
router.delete ('/detalle-actividades-admin/:id', adminMiddleware, RealAdmin, mainController.borrarActividades)

router.get('/publicaciones', mainController.publicaciones)
router.get ('/detalle-publicaciones-admin/:id', adminMiddleware, RealAdmin, mainController.detallePublicaciones)
router.get('/editar-publicaciones/:id', adminMiddleware, RealAdmin, mainController.editarPublicaciones)
router.post ('/editar-publicaciones/:id', adminMiddleware, RealAdmin, mainController.actualizarPublicaciones)
router.delete ('/detalle-publicaciones-admin/:id', adminMiddleware, RealAdmin, mainController.borrarPublicaciones)

router.get('/investigaciones', mainController.investigaciones)
router.get ('/leermas/:id', mainController.detalleInvestigacion)
router.get('/editar-investigaciones/:id', adminMiddleware, RealAdmin, mainController.editarInvestigaciones)
router.post ('/editar-investigaciones/:id', adminMiddleware, RealAdmin, mainController.actualizarInvestigaciones)
router.delete ('/leermas/:id', adminMiddleware, RealAdmin, mainController.borrarInvestigaciones)

router.get('/docencia', mainController.docencia)
router.get ('/detalle-docencia-admin/:id', adminMiddleware, RealAdmin, mainController.detalleDocencia)
router.get('/editar-docencia/:id', adminMiddleware, RealAdmin, mainController.editarProducto)
router.post ('/editar-docencia/:id', adminMiddleware, RealAdmin, mainController.actualizarProducto)
router.delete ('/detalle-docencia-admin/:id', adminMiddleware, RealAdmin, mainController.borrarDocencia)




module.exports = router;



