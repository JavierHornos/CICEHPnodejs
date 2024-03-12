const mainController = require('./../controllers/mainController')


const express = require ('express');
const router = express.Router();


router.get ('/' , mainController.home)
router.get('/about', mainController.about)
router.get('/actividades', mainController.actividades)
router.get('/publicaciones', mainController.publicaciones)
router.get('/investigaciones', mainController.investigaciones)
router.get('/docencia', mainController.docencia)


module.exports = router;



