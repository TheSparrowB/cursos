const Tipo = require("./../dataaccess/mongoose/tipo.schema");
import { TYPEHTMLCODE, TYPERESPONSECODE } from "../entity/util/enum";
import { Request, Response } from "express";

import pm = require("./../../services/property-manager");
import { ServiceResponse } from "../entity/util/service-response";
import { TIPO } from "../entity/models/tipo";
import { Model, Schema } from "mongoose";
const TipoSchema: Model<Schema> = require("../dataaccess/mongoose/tipo.schema");


export class TipoController{


    async registrarTipo(req: Request, res: Response){
        let cuerpo: any = req.body;

        try{
            let parametro: TIPO = {
                txt_tipo: pm.extraerTexto(cuerpo.txt_tipo),
                txt_grupo: pm.extraerTexto(cuerpo.txt_grupo)
            };

            const tipoParametro = new TipoSchema(parametro);

            //PROCEDEMOS A GUARDAR EL TIPO
            let gestion = await tipoParametro.save().catch(
                e => {
                    if(e.code == 11000 && (e.keyValue && e.keyValue.txt_tipo)){
                        throw(`El tipo '${e.keyValue.txt_tipo}' ya existe.`);
                    }                    
                }
            );

            return res.status(TYPEHTMLCODE.ProcessOk).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, null, "Ok")
            );
        }
        catch(e){
            let error = pm.arregloError(e, TYPEHTMLCODE.InternalServerError);
            let txtError = pm.obtenerError("Error al gestionar un tipo", error[1], cuerpo, req.headers["x-original-url"]);

            return res.status(error[0]).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, null, txtError)
            );
        }
    }




    async listarTipo(req: Request, res: Response){
        try{
            //PROCEDEMOS A LISTAR LOS TIPOS
            let listaTipo = await TipoSchema.find();

            return res.status(TYPEHTMLCODE.ProcessOk).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, listaTipo, "Ok")
            );
        }
        catch(e){
            let error = pm.arregloError(e, TYPEHTMLCODE.InternalServerError);
            let txtError = pm.obtenerError("Error al listar los tipos", error[1], null, req.headers["x-original-url"]);

            return res.status(error[0]).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, null, txtError)
            );
        }
    }




    async obtenerTipo(req: Request, res: Response){
        let cuerpo = req.body;

        try{
            let idTipo = pm.extraerTexto(cuerpo.id_tipo);

            if(!idTipo){
                throw("La operación no se pudo completar porque los parámetros no están completos.");
            }
            if(!pm.validarIdMongoose(idTipo)){
                throw("El id no presenta un formato adecuado.");
            }

            let tipo = await TipoSchema.findById(idTipo);

            if(!tipo){
                throw(`El tipo con id ${idTipo} no existe.`);
            }

            return res.status(TYPEHTMLCODE.ProcessOk).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, tipo, "Ok")
            );
        }
        catch(e){
            let error = pm.arregloError(e, TYPEHTMLCODE.InternalServerError);
            let txtError = pm.obtenerError("Error al obtener un tipo", error[1], cuerpo, req.headers["x-original-url"]);

            return res.status(error[0]).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, null, txtError)
            );
        }
    }



    async buscarTipo(req: Request, res: Response){
        let cuerpo = req.body;

        try{
            let parametros: TIPO = {
                num_page_size: pm.extraerNumero(cuerpo.num_page_size),
                num_current_page: pm.extraerNumero(cuerpo.num_current_page),
                txt_tipo: pm.extraerTexto(cuerpo.txt_tipo),
                txt_grupo: pm.extraerTexto(cuerpo.txt_grupo)
            };

            //CREAREMOS UN REGEXP PARA PODER HACER COMO UN "LIKE"
            let patronTipo = new RegExp(parametros.txt_tipo, "i");
            let patronGrupo = new RegExp(parametros.txt_grupo, "i");

            let resultados = await TipoSchema.find({
                $and: [
                    { txt_tipo: patronTipo },
                    { txt_grupo: patronGrupo }
                ]
            }, [
                "_id", "txt_tipo", "txt_grupo"
            ], {
                limit: parametros.num_page_size,
                skip: (parametros.num_current_page-1)*parametros.num_page_size
            });

            //console.log(resultados.getFilter())

            return res.status(TYPEHTMLCODE.ProcessOk).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, null, "Ok")
            );
        }
        catch(e){
            let error = pm.arregloError(e, TYPEHTMLCODE.InternalServerError);
            let txtError = pm.obtenerError("Error al buscar los tipos", error[1], cuerpo, req.headers["x-original-url"]);

            return res.status(error[0]).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, null, txtError)
            );
        }
    }




    async actualizarTipo(req: Request, res: Response){
        let cuerpo = req.body;

        try{
            let parametro: TIPO = {
                nid_tipo: pm.extraerTexto(cuerpo.nid_tipo),
                txt_tipo: pm.extraerTexto(cuerpo.txt_tipo),
                txt_grupo: pm.extraerTexto(cuerpo.txt_grupo)
            };

            if(!parametro.nid_tipo){
                throw("La operación no se pudo completar porque los parámetros no están completos.");
            }
            if(!pm.validarIdMongoose(parametro.nid_tipo)){
                throw("El id no presenta un formato adecuado.");
            }

            let gestion = await TipoSchema.findOneAndUpdate(
                { _id: parametro.nid_tipo },
                parametro
            ).then(
                r => {
                    //SI NO SE HA ENCONTRADO NADA
                    if(!r){
                        throw(`No se ha encontrado un tipo con id "${parametro.nid_tipo}"`);
                    }
                    else{
                        return res.status(TYPEHTMLCODE.ProcessOk).json(
                            new ServiceResponse(TYPERESPONSECODE.SinError, null, "Ok")
                        );
                    }
                }
            ).catch(
                e => {
                    throw(e);
                }
            );
        }
        catch(e){
            let error = pm.arregloError(e, TYPEHTMLCODE.InternalServerError);
            let txtError = pm.obtenerError("Error al actualizar un tipo", error[1], cuerpo, req.headers["x-original-url"]);

            return res.status(error[0]).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, null, txtError)
            );
        }
    }




    async eliminarTipo(req: Request, res: Response){
        let cuerpo = req.body;

        try{
            let nidTipo = pm.extraerTexto(cuerpo.nid_tipo);

            if(!nidTipo){
                throw("La operación no se pudo completar porque los parámetros no están completos.");
            }
            if(!pm.validarIdMongoose(nidTipo)){
                throw("El id no presenta un formato adecuado.");
            }

            let eliminacion = await TipoSchema.findOneAndDelete(
                { _id: nidTipo }
            ).then(
                (r: any) => {
                    console.log(r);
                    //SI NO SE HA ENCONTRADO NADA
                    if(!r){
                        throw(`No se ha encontrado un tipo con id "${nidTipo}".`);
                    }
                    else{
                        return res.status(TYPEHTMLCODE.ProcessOk).json(
                            new ServiceResponse(TYPERESPONSECODE.SinError, null, `El tipo "${r.txt_tipo}" ha sido eliminado exitosamente`)
                        );
                    }
                }
            ).catch(
                e => {
                    throw(e);
                }
            )
        }
        catch(e){
            let error = pm.arregloError(e, TYPEHTMLCODE.InternalServerError);
            let txtError = pm.obtenerError("Error al eliminar un tipo", error[1], cuerpo, req.headers["x-original-url"]);

            return res.status(error[0]).json(
                new ServiceResponse(TYPERESPONSECODE.SinError, null, txtError)
            );
        }
    }

}