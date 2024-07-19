import mongoose from "mongoose";

let mangostaCliente = null;

const inicializar = async() => {
    try{
        mangostaCliente = await mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}/`, {
            dbName: process.env.MONGO_DATABASE
        });
    }
    catch(e){
        throw(e.toString());
    }
}


// const terminar = async() => {
//     try{
//         //CERRAMOS LA CONEXION
//         mangostaCliente.disconnect();
//     }
//     catch(e){
//         throw(e.toString());
//     }
// }


const obtenerMetadata = async() => {
    try{
        return mangostaCliente.connection.db;
    }
    catch(e){
        throw(`Error al obtener metadata del mongoose: ${e.toString()}`);
    }
}


export { inicializar, obtenerMetadata }