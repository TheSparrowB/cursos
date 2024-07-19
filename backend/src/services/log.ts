import winston = require('winston');
import configLog = require("../config/log");

const { combine, timestamp, printf, colorize } = winston.format;
const customFormat = printf(info => {
    return `[${info.timestamp}] ${info.level}: ${info.message}`;
});
const exceptionFormat = printf(info => {
    return `[${info.timestamp}] ${info.level}: ${info.message}\nFIN\n`;
});
////
const logger = winston.createLogger({
    // ESTA VARIABLE ESPECIFICA QUE SOLO SE PODRA GUARDAR EL LOG SI EL NIVEL ES MENOR A 'info'
    level: 'info',
    format: combine(timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), customFormat),
    transports: [
        new winston.transports.File({ 
            filename: `${configLog.pathDirectoryLog}/error.log`, 
            level: 'error',
            // handleExceptions: true,
            maxsize: configLog.maxsize,
            maxFiles: configLog.maxFiles
        }),
        new winston.transports.File({ 
            filename: `${configLog.pathDirectoryLog}/combine.log`,
            maxsize: configLog.maxsize,
            maxFiles: configLog.maxFiles
        })
    ]
});

winston.loggers.add('MEOW', {
    format: combine(colorize({ all: true }), timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), exceptionFormat),
    exceptionHandlers: [
        new winston.transports.File({
            filename: `${configLog.pathDirectoryLog}/exception.log`,
            maxsize: configLog.maxsize,
            maxFiles: configLog.maxFiles
        })
    ]
});


if (process.env.NODE_ENV !== "produccion") {
    logger.add(new winston.transports.Console({
        format: combine(colorize({ all: true }), timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), customFormat)
    }));
}


//#######################################################################################################################################################
//#######################################################################################################################################################
//#region NIVELES DEL LOGGER
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};
//#endregion NIVELES DEL LOGGER
//#######################################################################################################################################################
//#######################################################################################################################################################


export { logger };