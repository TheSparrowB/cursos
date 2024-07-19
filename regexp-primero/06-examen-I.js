/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

// EL OBJETIVO DE ESTA PRUEBA ES CREAR UN PATRON QUE PUEDA VALIDAR UNA DIRECCIÓN DE CORREO ELECTRÓNICO
const patronCorreo = /^[a-z0-9]+([.\-_]?[a-z0-9])*@[a-z0-9]+(\.[a-z]{2,})+$/g;



// ##########################################################################################################################################################
// #region OPERADOR '^' Y '$'
// ##########################################################################################################################################################

// EL OPERADOR '^' SETEA EL INICIO DEL TEXTO O CADENA
// EL OPERADOR '$' SETEA EL FINAL DEL TEXTO O CADENA
// LOS PARÉNTESIS '()' AGRUPAN CIERTOS CRITERIOS

const listaCorreo = [
    "lakchera57@9knives.org",
    "mai.shiranui_@upc.edu.pe",
    "notengo.arr_oba",
    "luigi@lim@gob.cb",
    "princesita.Purpura57@gmail.es",
    "notificaciones@notificacionesbcp.com.pe",
    "account-security-noreply@accountprotection.microsoft.com",
    "leonardo euren@mel.to",
    "rajita..bitchy@fbi.gov.us",
    "gatsby_l0v3@hotmail.pe",
    "pillina_koqketa&gmail.c om",
    "paty_panty@usil.pe.lol",
    "chochoñaÑa@jojo.col",
    "kil$le&r.queen@japa.s ",
    "b.i.t.c.h.g@protonmail.ru",
    "the_sparrow_17@hotmail.com",
    "a@colo.com",
    "accounts@malwarebytes.com"
];

console.log("VALIDAMOS LOS CORREOS CON EL PATRÓN CREADO:");
for(const c of listaCorreo){
    console.log(`- CORREO => (${c}): ${c.match(patronCorreo)}`);
}

console.log("\n");


// ##########################################################################################################################################################
// #region FLAG 'm'
// ##########################################################################################################################################################

// SIN EMBARGO, LO MISMO NO SUELE SUCEDER CON PÁRRAFOS
const parrafo = `Estos los correos utilizados:
lakchera57@9knives.org
mai.shiranui_@upc.edu.pe
notengo.arr_oba
luigi@lim@gob.cb
princesita.Purpura57@gmail.es
notificaciones@notificacionesbcp.com.pe
account-security-noreply@accountprotection.microsoft.com
leonardo euren@mel.to
rajita..bitchy@fbi.gov.us
gatsby_l0v3@hotmail.pe
pillina_koqketa&gmail.c om
paty_panty@usil.pe.lol
chochoñaÑa@jojo.col
kil$le&r.queen@japa.s 
b.i.t.c.h.g@protonmail.ru
the_sparrow_17@hotmail.com
a@colo.com
accounts@malwarebytes.com`;

console.log(` - VALIDAMOS EL PÁRRAFO: ${parrafo.match(patronCorreo)}`);

// Y ESTO OCURRE PORQUE EL '^' Y '$' DEFINEN EL INICIO Y EL FIN DE LA CADENA, Y PUES, COMO ESTE ES UN PÁRRAFO,
// EL INICIO SE DA EN LA PRIMERA LÍNEA Y EL FIN EN LA ÚLTIMA. 

// PERO SI LO QUE SE QUIERE ES VALIDAR LÍNEA POR LÍNEA, ENTONCES EXISTE UN FLAG QUE LO PERMITE
const patronCorreoII = /^[a-z0-9]+([.\-_]?[a-z0-9])*@[a-z0-9]+(\.[a-z]{2,})+$/gm;

// EL FLAG 'm', PERMITE VALIDAR EL TEXTO DE UN PÁRRAFO LÍNEA POR LÍNEA, AHORA LO PROBAREMOS
console.log(` - VALIDAMOS EL PÁRRAFO CON EL FLAG 'm': ${parrafo.match(patronCorreoII)}`);

// Y VEMOS QUE AHORA SÍ FUNCIONA COMO LO ESPERADO