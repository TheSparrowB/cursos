import "./config/environment";
import { logger } from "./services/log";

//INICIALIZAMOS EL SERVIDOR
import app = require("./bin/app");
import mongoose = require("./api/dataaccess/factory/mongoose.factory");

const encender = async() => {
    logger.info("Empezando el servidor");

    try{
        logger.info("--Inicializamos la BD Mongoose");
        await mongoose.inicializar();
        logger.info("--Base de datos Mongoose iniciada");
    }
    catch(e){
        logger.error(`--Error al inicializar la BD Mongoose:\n ${e.toString()}\n FIN\n`);
        process.exit(1);
    }

    try{
        logger.info("Inicializando otros componentes");
        await app.inicializar();
    }
    catch(e){
        logger.error(`Error al inicializar el servidor:\n ${e.toString()}\n FIN\n`);
        process.exit(1);
    }
};


encender();

const apagar = async (e = null) => {
    logger.info("Apagando el servidor");

    // try{
    //     logger.info("Cerrando la conexión mongoose");
    //     await mongoose.terminar();
    //     logger.info("La base de datos mongoose ha sido cerrada.")
    // }
    // catch(e){
    //     logger.error(`Error al cerrar la conexión mongoose:\n ${e.toString()}\n FIN\n`);
    //     process.exit(1);
    // }

    try{
        logger.info("Terminando el servidor express");
        await app.terminar();
    }
    catch(e){
        logger.error(`Error al terminar el servidor:\n ${e.toString()}\n FIN\n`);
        process.exit(1);
    }

    logger.info("Terminando el proceso");

    if(e){
        process.exit(1);
    }
    else{
        process.exit(0);
    }
}



process.on('SIGTERM', () => {
	logger.info('Recibió SIGTERM');
	apagar();
});

process.on('SIGINT', () => {
	logger.info('Recibió SIGINT');
	apagar();
});

process.on('uncaughtException', err => {
	logger.error(`Excepción no capturada:\n ${err.toString()}\n FIN\n`);
	apagar(err);
});


if (process.env.NODE_ENV && process.env.NODE_ENV === 'prod') {
    logger.info("Iniciado en ambiente de producción");
}
