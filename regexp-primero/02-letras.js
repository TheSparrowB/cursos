/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
const primeraExpresion = "HolÁ 705A señores TEveluneulo fauna@PÁPÉLÍNÁ.com, 77 me llamo Lefoncio5089 Y AMO LOS ÑANDÚES.";

// LA EXPRESIÓN '\w' SOLO VALIDA CARACTERES "COMUNES", NO CARACTERES ESPECIALES
// LA EXPRESIÓN 'w' EQUIVALDRÍA A [a-zA-Z_0-9]
const expresionUno = /\w\w/g;
const expresionDob = /\w{2}/g;
console.log("VALIDANDO TEXTOS CON EL 'w': ");
console.log(`- Obteniendo resultados de la primera expresión: ${primeraExpresion.match(expresionUno)}`);
console.log(`- Obteniendo resultados de la primera expresión con '{2}': ${primeraExpresion.match(expresionDob)}`);

console.log("\n");

// LOS CORCHETES EXPRESAN 'rangos', EN ESTE CASO SOLO VALIDAN LETRAS DE LA 'a' A LA 'z' EN MINÚSCULAS
// LAS LLAVES EXPRESAN 'repeticiones', EN ESTE CASO SOLO VALIDAMOS 2 REPETICIONES, ES DECIR, PARES DE CARACTERES
const expresionDos = /[a-z]{2}/g;
const expresionTre = /[a-zA-Z]{2}/g;
const expresionCua = /[a-zA-ZÑñ]{2}/g;
console.log("VALIDANDO TEXTOS CON EL RANGO '[a-z]': ");
console.log(`- Obteniendo resultados de la expresión (minúsculas): ${primeraExpresion.match(expresionDos)}`);
console.log(`- Obteniendo resultados de la expresión (minúsculas y mayúsculas): ${primeraExpresion.match(expresionTre)}`);
console.log(`- Obteniendo resultados de la expresión (minúsculas, mayúsculas y eñe): ${primeraExpresion.match(expresionCua)}`);




// NOTA: LA 'g' AL FINAL AYUDA A IDENTIFICAR TODAS LAS OCURRENCIAS