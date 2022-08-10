const { Schema, model } = require('mongoose');

const OrganismoSchema = new Schema({
    identificador: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    nombrec: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    },
    secuencia: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
});

module.exports = model('Organismo', OrganismoSchema );