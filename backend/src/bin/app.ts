import express = require("express");
import bodyParser = require("body-parser");
import helmet from "helmet";
import path from "path";

import http = require("http");
import { ServiceResponse } from "../api/entity/util/service-response";
import { TYPERESPONSECODE } from "../api/entity/util/enum";
import { logger } from "../services/log";
import { Application, Request, Response } from "express";


//RUTAS IMPORTADAS
import { router as tipoRoutes } from "./../routes/tipo.routes";
import { router as individuoRoutes } from "./../routes/individuo.routes";


let httpServer: http.Server = null;
const moment = require('moment');

const inicializar = (): Promise<number> => {
    return new Promise((resolve, reject) => {

        //CREAMOS LA INSTANCIA EXPRESS
        const app: Application = express();
        httpServer = http.createServer(app);

        //ESTO NOS AYUDA A SUPRIMIR ALGUNAS CABECERAS
        app.use(helmet());

        //SETEAMOS EL BODY-PARSER
        app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
        app.use(bodyParser.json());

        //SE SETEA EL LENGUAJE DE LAS FECHAS
        moment.locale('es');

        //#region IMPORTACION DE RUTAS
        app.use("/tipo", tipoRoutes);
        app.use("/individuo", individuoRoutes);
        //#endregion IMPORTACION DE RUTAS

        //CON ESTO SETEAMOS LA RUTA DE LOS ARCHIVOS ESTÁTICOS
        app.use("/media", express.static(path.join(__dirname, "..", '/public')));
        
        //#region MÉTODOS POR DEFECTO
        app.get("/", (req: Request, res: Response) => {
            res.end("Bienvenido");
        });

        app.use(function (req, res, next) {
            res
              .status(404)
              .json(
                new ServiceResponse(
                  TYPERESPONSECODE.ConError, null, "Esta ruta no existe."
                )
              );
          });
        //#endregion MÉTODOS POR DEFECTO



        httpServer
        .listen(process.env.SERVER_PORT)
        .on("listening", () => {
            logger.info(`Servidor funcionando en localhost:${process.env.SERVER_PORT}`);
            resolve(1);
        })
        .on("error", (err) => {
            reject(err);
        });

        httpServer.setTimeout(1000*60*20);
    });
}




const terminar = () => {
    return new Promise((resolve, reject) => {
      httpServer.close((err) => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve(1);
      });
    });
  };
  
  
  
  export { inicializar, terminar };
  