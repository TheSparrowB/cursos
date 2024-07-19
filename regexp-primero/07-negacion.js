/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

// ##########################################################################################################################################################
// NÓTESE QUE EL 'w' VALIDA CUALQUIER CARACTER, MIENTRAS QUE EL 'W' VALIDA CUALQUIER COSA QUE NO
// SEA UN CARACTER
const patronUno = /\w/g;
const patronDos = /\W/g;

const oracionUno = "Había una-vez 103 murciélagos ¡VELOCES!. EstOS cantabaN_reggaeton_$%$ con un Ñandú: pum7, pim8, pam9 $#%#$.";

console.log("COMENZAMOS A VALIDAR CON 'w' y 'W':");
console.log(`Resultado del 'w' (caracteres normales): ${oracionUno.match(patronUno)}`);
console.log(`Resultado del 'W' (otros diferentes): ${oracionUno.match(patronDos)}`);

console.log("\n");

// EN ESTE CASO PODRÍA DECIRSE QUE EL 'W' es el opuesto del 'w'


// ##########################################################################################################################################################
// ESTE OTRO CARACTER 's' VALIDA ÚNICAMENTE ESPACIOS, MIENTRAS QUE EL 'S' los niega

const patronTre = /\s/g;
const patronCua = /\S/g;

console.log("COMENZAMOS A VALIDAR CON 's' y 'S':");
console.log(`Resultado del 's' (espacio): ${oracionUno.match(patronTre)}`);
console.log(`Resultado del 'S' (no es un espacio): ${oracionUno.match(patronCua)}`);

console.log("\n");

// EN ESTE CASO PODRÍA DECIRSE QUE EL 'S' es el opuesto del 's'


// ##########################################################################################################################################################
// SIN EMBARGO, EXISTEN FORMAS DE NEGAR RANGOS CON EL USO DEL '^', SI, EL MISMO CARACTER
// USADO PARA INDICAR EL INICIO DE LA CADENA, PERO ESTO DENTRO DE UN RANGO

// CON ESTE PATRON VAMOS A NEGAR CUALQUIER NÚMERO Y MAYÚSCULA
const patronCin = /[^0-9A-Z]/g;
// CON ESTE PATRÓN VAMOS A NEGAR CUAQUIER MINÚSCULA Y UNO QUE OTRO CARACTER ESPECIAL
const patronSei = /[^a-z.\-!,¡]/g;

console.log("COMENZAMOS A VALIDAR CON LAS NEGACIONES DE RANGOS '^': ");
console.log(`Resultado (sin números y mayúsculas): ${oracionUno.match(patronCin)}`);
console.log(`Resultado (sin minúsculas y '.-!,¡'): ${oracionUno.match(patronSei)}`);