const moment = require('moment');
import { logger } from "./log";


//#######################################################################################################################################################
//#region TEXTO
const extraerTexto = (texto, longitud?: number) => {
    if(!texto){
        return "";
    }
    else{
        if(texto == "null"){
            return "";
        }
        else if(texto == "undefined"){
            return "";
        }
        
        if(longitud){
            let base = texto.toString().trim();

            if(base.length > longitud){
                return base.substring(0, longitud);
            }
            else{
                return base;
            }
        }
        else{
            return texto.toString().trim();
        }
    }
}


const validarIdMongoose = (texto) => {
    if (texto.match(/^[0-9a-fA-F]{24}$/)) {
        return true;
    }

    return false;
}


const tieneFormatoCorreo = (texto) => {
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(texto)){
        return true;
    }

    return false;
}


const reemplazarTodo = (str, find, replace) => {
    let cadena = extraerTexto(str);
    return cadena.replace(new RegExp(find, 'g'), replace);
}


const tieneNuevaLinea = (texto) => {
    let regex = /\r|\n/.exec(texto);

    if(regex){
        return true;
    }
    else{
        return false;
    }
}
//#endregion TEXTO
//#######################################################################################################################################################



//#######################################################################################################################################################
//#region NUMERICO
const esEntero = (texto) => {
    let textoExtraido = extraerTexto(texto);

    if(/^-?\d+$/.test(textoExtraido)){
        return true;
    }

    return false;
}


const esNumerico = (texto, positivo=false) => {
    let textoExtraido = extraerTexto(texto);

    if(positivo){
        if(/^\d+(\.\d{0,30})?$/.test(textoExtraido)){
            return true;
        }
    }
    else{
        if(/^-?\d+(\.\d{0,30})?$/.test(textoExtraido)){
            return true;
        }
    }

    return false;
}


const extraerNumero = (texto) => {
    let textoExtraido = extraerTexto(texto);

    if(esEntero(textoExtraido)){
        return parseInt(textoExtraido);
    }
    else if(esNumerico(textoExtraido)){
        return parseFloat(textoExtraido);
    }
    else{
        return 0;
    }
}


const formatearNumero = (numero, decimal) => {
    numero = extraerNumero(numero);
    let resultado = numero.toLocaleString('en-US', {minimumFractionDigits: decimal, maximumFractionDigits: decimal});
    return resultado;
}


const redondearNumero = (numero, decimales=2) => {
    try{
        let final = parseFloat((extraerNumero(numero)).toFixed(decimales));
        return final;
    }
    catch(e){
        return 0;
    }
}


const dividirNumero = (superior, inferior, decimales) => {
    try{
        let supParseado = extraerNumero(superior);
        let infParseado = extraerNumero(inferior);
    
        if(supParseado==0 || infParseado==0){
            return 0;
        }
        else{
            let division = supParseado/infParseado;
            let redondeado = redondearNumero(division, decimales);
            return redondeado;
        }
    }
    catch(e){
        return 0;
    }
}
//#endregion NUMERICO
//#######################################################################################################################################################



//#######################################################################################################################################################
//#region FECHA
const formatearFecha = (fecha, formato='DD/MM/YYYY') => {
    if(fecha){
        try{
            //PRIMERO NOS ASEGURAMOS QUE LA FECHA SEA UNA FECHA
            let tipo = typeof(fecha);

            //SI LA FECHA ES UN STRING, LA CONVERTIMOS A DATE
            if(tipo=="string"){
                fecha = convertirFecha(fecha, "DD/MM/YYYY HH:mm:ss A");
            }

            let resultado = moment(fecha).format(formato).toString();
            return resultado;
        }
        catch(e){
            return "";
        }
    }
    else{
        return "";
    }
}


const restarFecha = (fechaMenor: any, fechaMayor: any, unidadTiempo: any) => {
    try{
        let fechaI = fechaMenor;
        let fechaII = fechaMayor;

        if(!fechaMenor){
            fechaI = new Date();
        }
        if(!fechaII){
            fechaII = new Date();
        }

        return moment(fechaII).diff(fechaI, unidadTiempo);
    }
    catch(e){
        return 0;
    }
}


const convertirFecha = (fecha, formato='DD/MM/YYYY') => {
    try{
        let fechaMoment = moment(fecha, formato);
        return fechaMoment.toDate();
    }
    catch(e){
        return null;
    }
}

//#endregion FECHA
//#######################################################################################################################################################



//#######################################################################################################################################################
//#region LISTA
const obtenerMaximo = (lista, propiedad, inicial = 0) => {
    let maximo = 0;

    if(propiedad){
        maximo = lista.reduce((max: number, objeto) => {
            return (objeto[propiedad] > max ? objeto[propiedad] : max)
        }, inicial);
    }
    else{
        maximo = lista.reduce((max: number, objeto) => {
            return (objeto > max ? objeto : max)
        }, inicial);
    }
    
    return maximo;
}


const obtenerMinimo = (lista, propiedad, inicial = 0) => {
    let minimo = 0;

    if(propiedad){
        minimo = lista.reduce((min: number, objeto) => {
            return (objeto[propiedad] < min ? objeto[propiedad] : min)
        }, inicial);
    }
    else{
        minimo = lista.reduce((min: number, objeto) => {
            return (objeto < min ? objeto : min)
        }, inicial);
    }
    
    return minimo;
}


const sumarArreglo = (lista, propiedad) => {
    try{
        let suma = lista.reduce((x, y) => x + redondearNumero(y[propiedad]), 0);
        return redondearNumero(suma);
    }
    catch(e){
        return 0;
    }
}
//#endregion LISTA
//#######################################################################################################################################################



//#######################################################################################################################################################
//#region ERROR
const arregloError = (error, tipo?) => {
    let errorFinal;

    //VERIFICAMOS SI EL ERROR ES UN ARREGLO
    if(Array.isArray(error)){
        errorFinal = error;
    }
    else{
        errorFinal = [tipo, error];
    }

    return errorFinal;
}


/**
 * Este servicio se encarga de procesar los errores ocurridos durante la ejecución de los servicios.
 * @param mensaje Es el mensaje que agregará antes del error.
 * @param error Es el texto del error en sí.
 * @param parametros El objeto en formato JSON que formó parte de la petición.
 * @param url La URL del servicio donde ocurrió el error.
 * @returns El mensaje de error ya procesado.
 */
const obtenerError = (mensaje, error, parametros?, url?) => {
    try{
        //PRIMERO LE QUITAMOS LA CABECERA DE LA EXCEPCIÓN
        let txtError = reemplazarTodo(error, /ORA-[0-9]{5}: /, "");
        //SI TIENE ALGÚN PIPE, LO REEMPLAZAMOS CON NUEVAS LINEAS
        txtError = reemplazarTodo(txtError, /\|/, "\n");

        //AHORA IMPRIMIREMOS EL ERROR
        logger.error(`${mensaje}:\n${txtError}`);

        //SI EL ERROR TIENE NUEVAS LÍNEAS, SOLO QUEREMOS EL MENSAJE DE LA PRIMERA PORCIÓN
        if(tieneNuevaLinea(txtError)){
            let arrError = txtError.split("\n");
            txtError = arrError[0];
        }

        if(!esVacio(parametros)){
            logger.error(`--PARAMETROS: ${JSON.stringify(parametros)}`);
        }

        if(url){
            logger.error(`--URL: ${url}`);
        }

        logger.error("FIN\n");

        let txtResultado = `${mensaje}: ${txtError}`;
        return txtResultado;
    }
    catch(e){
        return mensaje;
    }
    
}



const mongooseError = (error) => {
    try{
        let valores = Object.keys(error.keyValue);
        //DUPLICADO
        if(error.code == 11000){
            return `El valor de la propiedad "${valores[0]}" ya existe.`;
        }

        return error.errmsg;
    }
    catch(e){
        return e.toString();
    }
}
//#endregion ERROR
//#######################################################################################################################################################




//#######################################################################################################################################################
//#region OBJETO
const esVacio = (objeto) => {
    //SI ES NULO O INDEFINIDO
    if(!objeto){
        return true;
    }

    //SI EL OBJETO NO ES NULO, PERO ES VACÍO
    if(Object.keys(objeto).length==0){
        return true;
    }

    return false;
}


const generarOrden = (campos, orden) => {
    try{
        let arrCampo = [];
        let arrOrden = [];
        let objFinal = {};

        if(!campos){
            throw("No se han recibido los campos de orden.");
        }
        if(!orden){
            throw("No se ha recibido la lista de orden.")
        }

        //VERIFICAMOS QUE LOS CAMPOS TENGAN UNA COMA O ALGO
        if(campos.includes(",")){
            arrCampo = campos.split(",");
        }
        else{
            arrCampo.push(campos);
        }

        //VERIFICAMOS SI LAS ORDENES TIENEN COMAS
        if(orden.includes(",")){
            arrOrden = orden.split(",");
        }
        else{
            if(esEntero(orden)){
                arrOrden.push(extraerTexto(orden))
            }
        }

        //UNA VEZ QUE TENEMOS LOS ARREGLOS, PROCEDEMOS A ARMAR LAS RELACIONES ATRIBUTO-VALOR
        let numOrden = 0;
        for(let c of arrCampo){
            objFinal[c] = arrOrden[numOrden] || 1;
            numOrden++;
        }

        return objFinal;
    }
    catch(e){
        logger.error(`Ocurrió un error al generar el orden de la consulta con los siguientes inputs: ${e.toString()}. C-(${campos}) = O-(${orden})`)
        return { _id: 1 };
    }
}
//#endregion OBJETO
//#######################################################################################################################################################










export { extraerTexto, tieneFormatoCorreo, reemplazarTodo, tieneNuevaLinea, validarIdMongoose,
    esEntero, esNumerico, extraerNumero, formatearNumero, redondearNumero, dividirNumero,
    formatearFecha, restarFecha, convertirFecha,
    obtenerMaximo, obtenerMinimo, sumarArreglo,
    arregloError, obtenerError, mongooseError,
    esVacio, generarOrden
 };