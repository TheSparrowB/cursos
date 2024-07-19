/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

// CREAMOS EL PATRÓN QUE VALIDE CUALQUIER NÚMERO TELEFÓNICO (HASTA DONDE SEPAMOS)
const patronTelefono = /^(((\(\+|\+[(])[0-9]+\)\s?)|(\+[0-9]+\s?))?(\([0-9]+\)(\s)?)*([0-9]+(-)?[0-9]+\s?[0-9]+)+$/gm;


// EL PIPE "|" ES UN OPERADOR QUE PERMITE FRAGMENTOS OPCIONALES
const patronOpcional = /(http|https):\/\//g;
console.log("VALIDANDO EL USO DEL 'PIPE':");
// EN ESTE CASO, ESTAMOS EVALUANDO LAS "CABECERAS" DE UNA URL, SI ESTAS EMPIEZAN CON "HTTP" O "HTTPS"
// DE LO CONTRARIO, ENTONCES DEBERÍA DE "TRONAR"
console.log(`VALIDANDO UNA URL HTTP: ${patronOpcional.test("http://cerdas.com")}`);
console.log(`VALIDANDO UNA URL HTTPZ: ${patronOpcional.test("httpz://puercas.com")}`);
console.log(`VALIDANDO UNA URL HTTPS: ${patronOpcional.test("https://marranas.com")}`);

console.log("\n");


const arregloTelefono = [
    "258-1945",
    "(+251)78594-34436436",
    "(+7) 23523-23523",
    "+(23) 4754-54754",
    "(+51)(245)235235-3252",
    "(+17) 234 324 234",
    "(+47) 963829870",
    "+20 15 2523252323",
    "987 5684 358"
];


console.log("PROCEDEMOS A VALIDAR LOS PATRONES:");
for(const t of arregloTelefono){
    console.log(`- TELÉFONO => (${t}): ${t.match(patronTelefono)}`);
}