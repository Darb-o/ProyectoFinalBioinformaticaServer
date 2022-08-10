
const { response } = require('express');
const { validationResult } = require('express-validator');
const Organismo = require('../models/Organismo');

const agregarOrganismo = async ( req, res = response ) => {
    
    const errors = validationResult( req );

    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const { nombre, nombrec, descripcion, longitud, secuencia} = req.body;

    try{
        const organismo = new Organismo( req.body );
        await organismo.save();
        return res.status(201).json({
            ok: true,
            oid: organismo.id,
            nombre
        });
    }catch(error){
        console.log( error );
        return res.status(500).json({
            ok: false,
            msg: "error jodido"
        })
    }

}

const consultarOrganismos = async ( req, res = response ) => {
    
    try{
        const organismos = await Organismo.find();
        if( !organismos ){
            return res.status(400).json({
                ok: false,
                msg: "No se encontro ningun organismo "
            })
        }
        console.log("Organismos cargados")
        return res.json({
            organismos
        })

    } catch( error ){
        console.log( error );
        return res.status(500).json({
            ok: false,
            msg: "error doblemente jodido"
        })
    }
}

module.exports = {
    agregarOrganismo,
    consultarOrganismos
}