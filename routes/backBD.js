const { Router } = require('express');
const { check } = require('express-validator');
const { agregarOrganismo , consultarOrganismos } = require('../controllers/backBD');

const router = Router();

router.post( '/agregar', [
    check( 'secuencia', 'La secuencia es obligatoria' ).isString(),
],agregarOrganismo )

router.get('/consultar', consultarOrganismos )

module.exports = router;