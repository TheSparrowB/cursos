/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
const primeraExpresion = "HolÁ 705A señores me llamo Lefoncio5089 (@L3f$$) y nací en el año 1984. ¡Me gustan los Viern3s 13!, AMO LOS ÑANDÚES (En mi vida, muy k0rt#, tuve 76 de ÉllÓs).";

// EL '\d' VALIDA PUROS CARACTERES NUMÉRICOS
const expresionUno = /\d\d/g;
const expresionDos = /\d{2}/g;
console.log("VALIDANDO TEXTOS CON EL 'd': ");
console.log(`- Obteniendo resultados de la primera expresión: ${primeraExpresion.match(expresionUno)}`);
console.log(`- Obteniendo resultados de la primera expresión con '{2}': ${primeraExpresion.match(expresionDos)}`);

console.log("\n");

const expresionTre = /[0-9]/g;
const expresionCua = /[0-9]{3}/g;
const expresionCin = /[1-4]/g;
console.log("VALIDANDO TEXTOS CON EL RANGO '[0-9]': ");
console.log(`- Obteniendo resultados de la expresión (números): ${primeraExpresion.match(expresionTre)}`);
console.log(`- Obteniendo resultados de la expresión (números (3 veces)): ${primeraExpresion.match(expresionCua)}`);
console.log(`- Obteniendo resultados de la expresión (números del 1 al 4): ${primeraExpresion.match(expresionCin)}`);

console.log("\n");

const expresionSei = /[0-5a-zA-ZÑñ .!,(@)]{4}/g;
console.log("VALIDANDO TEXTOS CON TODO LO APRENDIDO: ");
console.log(`- Obteniendo resultados de la expresión (números del 1-5 y otros caracteres (4 repeticiones)): ${primeraExpresion.match(expresionSei)}`);
