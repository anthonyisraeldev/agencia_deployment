const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'testimoniales',
        testimoniales: testimoniales
    });
}

exports.agregarTestimonial = async(req, res) => {
    // Validar que todos los campos estén llenos
    let { nombre, correo, mensaje } = req.body;

    let errores = [];

    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu Nombre' })
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu Correo' })
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu Mensaje' })
    }

    // Revisar por errores
    if (errores.length > 0) {
        // Muestra la vista con errores
        const testimoniañes = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            pagina: 'Testimoniales',
            mensaje
        });

    } else {
        // Almacenamos en base de datos
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
            .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}
