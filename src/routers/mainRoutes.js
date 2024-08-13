const mainController = require('./../controllers/mainController')
const adminMiddleware = require('../middlewares/adminMiddleware')
const RealAdmin = require('../middlewares/RealAdmin')


const express = require ('express');
const router = express.Router();



router.get ('/' , mainController.home)
router.get('/about', mainController.about)
router.get('/actividades', mainController.actividades)
router.get('/publicaciones', mainController.publicaciones)
router.get('/investigaciones', mainController.investigaciones)
router.get ('/leermas/:id', mainController.detalleInvestigacion)

router.get('/docencia', mainController.docencia)
router.get ('/detalle-docencia-admin/:id', adminMiddleware, RealAdmin, mainController.detalleDocencia)
router.get('/editar-docencia/:id', adminMiddleware, RealAdmin, mainController.editarProducto)
router.post ('/editar-docencia/:id', adminMiddleware, RealAdmin, mainController.actualizarProducto)
router.delete ('/detalle-docencia-admin/:id', adminMiddleware, RealAdmin, mainController.borrarDocencia)


module.exports = router;



