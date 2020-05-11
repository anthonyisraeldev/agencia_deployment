const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

/** Controladores */
const nostrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const mostrarTestimoniales = require('../controllers/testimonialesControllers');


module.exports = function(){

    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nostrosController.infoNosotros);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje );
    router.get('/testimoniales', mostrarTestimoniales.mostrarTestimoniales);
    // Cuando se llena el formulario
    router.post('/testimoniales', mostrarTestimoniales.agregarTestimonial)
    
    return router;
}