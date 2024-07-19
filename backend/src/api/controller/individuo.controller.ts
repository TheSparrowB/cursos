const IndividuoModel: Model<Schema> = require("../dataaccess/mongoose/individuo.schema");
const Tipo = require("./../dataaccess/mongoose/tipo.schema");
const fs = require('fs');
import path from "path";

import { TYPEHTMLCODE, TYPERESPONSECODE } from "../entity/util/enum";
import { Request, Response } from "express";
import { ServiceResponse } from "../entity/util/service-response";
import { Model, Schema } from "mongoose";
import { INDIVIDUO } from "../entity/models/individuo";

import pm = require("./../../services/property-manager");


export class IndividuoController{


    async buscarIndividuo(req: Request, res: Response){
        let cuerpo = req.body;

        try{
            let parametros: INDIVIDUO = {
                num_page_size: pm.extraerNumero(cuerpo.num_page_size),
                num_current_page: pm.extraerNumero(cuerpo.num_current_page),
                txt_sort_field: pm.extraerTexto(cuerpo.txt_sort_field),
                txt_sort_order: pm.extraerTexto(cuerpo.txt_sort_field),

                tip_individuo: pm.extraerTexto(cuerpo.tip_individuo),
                obj_orden: {}
            };

            if(parametros.txt_sort_field){
                parametros.obj_orden = pm.generarOrden(parametros.txt_sort_field, parametros.txt_sort_order);
            }

            //CREAREMOS UN REGEXP PARA PODER HACER COMO UN "LIKE"
            let patronTipo = new RegExp(parametros.tip_individuo, "i");

            let resultados = await IndividuoModel.find({
                $and: [
                    { tip_individuo: patronTipo }
                ]
            }, [
                "_id", "txt_nombre", "tip_individuo"
            ], {
                limit: parametros.num_page_size,
                skip: (parametros.num_current_page-1)*parametros.num_page_size
            }).sort(parametros.obj_orden);


            //RECORREMOS LOS REGISTROS OBTENIDOS
            for(let r of resultados){
                //BUSCAMOS SI EXISTE FOTO ALGUNA DEL REGISTRO
                const ruta = `${path.join(__dirname, "../..", "/public/img/individuo/")}${r._id}.jpg`;
                let existencia = fs.existsSync(ruta);
                
                //SI EL ARCHIVO EXISTE
                if(existencia){
                    r["txt_ruta"] = `${process.env.RUTA_MEDIA}/img/individuo/${r._id}.jpg`;
                }
                //DE LO CONTRARIO, LE ASIGNAMOS UNA RUTA POR DEFECTO
                else{
                    r["txt_ruta"] = `${process.env.RUTA_MEDIA}/img/individuo/notfound.jpg`;
                }
            }

            return res.status(TYPEHTMLCODE.ProcessOk).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, resultados, "Ok")
            );
        }
        catch(e){
            let error = pm.arregloError(e, TYPEHTMLCODE.InternalServerError);
            let txtError = pm.obtenerError("Error al buscar los individuos", error[1], cuerpo, req.headers["x-original-url"]);

            return res.status(error[0]).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, null, txtError)
            );
        }
    }
    

}