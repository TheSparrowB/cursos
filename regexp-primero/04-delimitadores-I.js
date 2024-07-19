/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
const listaCorreo = [
    "lakchera57@9knives.org",
    "princesita.Purpura57@gmail.es",
    "leonardo euren@mel.to",
    "gatsby_l0v3@hotmail.pe",
    "pillina_koqketa&gmail.c om",
    "chochoñaÑa@jojo.col",
    "kil$le&r.queen@japa.s "
];

// ##########################################################################################################################################################
// RANGOS ({5,9}) Y ESCAPES (\)
// ##########################################################################################################################################################


// DENTRO DE LAS LLAVES SE PUEDE COLOCAR MÁS DE UN NÚMERO, EN ESTE CASO SIRVE PARA PODER 
// LIMITAR EL NÚMERO DE OCURRENCIAS DE UN MÍNIMO A UN MÁXIMO
const expresionUno = /[a-z]{3,5}/g;

/* EL SLASH (\) ES UN CARACTER DE ESCAPE, QUIERE DECIR QUE VALIDARÁ AL PUNTO COMO UN
CARACTER '.' Y NO COMO CUALQUIER OTRA COSA */

// PRIMERA EXPRESION: SE VALIDA QUE EL GRUPO DE 2 CARACTERES ESTÉ FORMADO POR CUALQUIER LETRA O UN PUNTO '.'
const expresionDos = /[a-z.]{2}/g;
// SEGUNDA EXPRESION: SE VALIDA QUE EL GRUPO DE 2 CARACTERES ESTÉ FORMADO PRIMERO POR UNA LETRA MINÚSCULA DE LA A-Z Y SEGUIDO POR UN PUNTO '.'
const expresionTre = /[a-z]\./g;
// TERCERA EXPRESION: SE VALIDA QUE EL GRUPO DE 2 CARACTERES ESTÉ FORMADO PRIMERO POR UNA LETRA MINÚSCULA DE LA A-Z, SEGUIDO DE UN CARACTER CUALQUIERA
const expresionCua = /[a-z]./g;

console.log("VALIDAMOS SOLO GRUPOS DE LETRAS MINÚSCULAS (3 A 5):");
for(const c of listaCorreo){
    console.log(`- CORREO => (${c}): ${c.match(expresionUno)}`);
}

console.log("\n");

console.log(`VALIDAMOS USANDO ESCAPE:`)
for(const c of listaCorreo){
    console.log(`- CORREO (sin escape y dentro de un conjunto) => (${c}): ${c.match(expresionDos)}`);
    console.log(`- CORREO (con escape) => (${c}): ${c.match(expresionTre)}`);
    console.log(`- CORREO (sin escape) => (${c}): ${c.match(expresionCua)}`);
}