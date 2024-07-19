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
    "HamazN$k1...@annunak1.pe",
    "princesita.Purpura57@gmail.es",
    "leonardo euren@mel.to",
    "gatsby_l0v3@hotmail.pe",
    "pillina_koqketa&gmail.c om",
    "chochoñaÑa@jojo.col",
    "kil$le&r.queen&@japa.s ",
    "$%&elxino$%#@qq.ch"
];


// ##########################################################################################################################################################
// PLUS (+)
// ##########################################################################################################################################################

// EL SÍMBOLO (+) AGREGA LA VALIDACIÓN DE QUE EL ELEMENTO A SU IZQUIERDA SE REPITA "AL MENOS UNA VEZ"
const expresionUno = /[a-zA-Z0-9.]+@/g;

console.log("VALIDAMOS EL GRUPO ALFANUMÉRICO (CON UN PUNTO) SEGUIDO DE UN ARROBA (+):");
for(const c of listaCorreo){
    console.log(`- CORREO => (${c}): ${c.match(expresionUno)}`);
}

console.log("\n");


// ##########################################################################################################################################################
// ASTERISCO (*)
// ##########################################################################################################################################################

// EL SÍMBOLO (*) AGREGA LA VALIDACIÓN DE QUE EL ELEMENTO A SU IZQUIERDA SE REPITA "AL MENOS UNA VEZ O NINGUNA"
const expresionDos = /[a-zA-Z0-9.]*@/g;

console.log("VALIDAMOS EL GRUPO ALFANUMÉRICO (CON UN PUNTO) SEGUIDO DE UN ARROBA (*):");
for(const c of listaCorreo){
    console.log(`- CORREO => (${c}): ${c.match(expresionDos)}`);
}

console.log("\n");


// ##########################################################################################################################################################
// INTERROGACIÓN (?)
// ##########################################################################################################################################################

// EL SÍMBOLO (?) AGREGA LA VALIDACIÓN DE QUE EL ELEMENTO A SU IZQUIERDA "OCURRA SOLO UNA VEZ O NINGUNA"
// NÓTESE QUE EL '?' PUEDE FUNCIONAR COMO REEMPLAZO O ATAJO DEL RANGO {0,1}.
const expresionTre = /[a-zA-Z0-9.]?@/g;
const expresionCua = /[a-zA-Z0-9.]{0,1}@/g;

console.log("VALIDAMOS EL GRUPO ALFANUMÉRICO (CON UN PUNTO) SEGUIDO DE UN ARROBA (?):");
for(const c of listaCorreo){
    console.log(`- CORREO => (${c}): ${c.match(expresionTre)}`);
    console.log(`- CORREO => (${c}): ${c.match(expresionCua)}`);
}