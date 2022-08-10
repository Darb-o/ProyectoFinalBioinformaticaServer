const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

//crear el servidor de express
const app = express();
//conexion base de datos 
dbConnection();
//directorio publico
app.use( express.static('public'));
//cors
app.use( cors() );
//lectura y parseo del body
app.use( express.json() );

//middleware rutas
app.use('/app/consulta', require('./routes/backBD'));

app.listen( process.env.PORT , () => {
    console.log('listening on port ' + process.env.PORT);
});