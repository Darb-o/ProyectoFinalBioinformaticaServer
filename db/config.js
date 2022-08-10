
const mongoose = require('mongoose');

const dbConnection = async() => {
   try{
    await mongoose.connect(process.env.BD_CNN,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('base de datos online')
   }catch(err){
    console.error(err);
    throw new Error('Error conexion base de datos')
   }
}

module.exports = {
    dbConnection
}