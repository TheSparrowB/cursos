/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

// EL PUNTO '.' HACE QUE EL REGEXP VALIDE CUALQUIER CARACTER
const expresionBasica = /./;
console.log("VALIDANDO TEXTOS CON EL PUNTO (.): ");
console.log(`- Validamos el texto 'Caracol': ${expresionBasica.test('Caracol')}`);
console.log(`- Validamos el texto '$%&&$$': ${expresionBasica.test('$%&&$$')}`);

// SIN EMBARGO, UN PUNTO SOLO VALIDA UN SOLO CARACTER, SI PONEMOS 'N' PUNTOS, ENTONCES VALIDA LA EXISTENCIA DE 'N' PUNTOS
const expresionTriple = /.../;
console.log("VALIDANDO TEXTOS CON TRIPLE PUNTO (..): ");
console.log(`- Validamos el texto 'Gato': ${expresionTriple.test('Gato')}`);
console.log(`- Validamos el texto 'N': ${expresionTriple.test('N')}`);
console.log(`- Validamos el texto 'Yuu': ${expresionTriple.test('Yuu')}`);
console.log(`- Validamos el texto 'Ah': ${expresionTriple.test('Ah')}`);