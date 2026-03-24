/*
Video: youtube.com/shorts/y-n9eUvprtA

Cómo determinar si dos cadenas son anagramas con JavaScript:

Podemos empezar con almacenar las dos cadenas de caracteres en sus respectivas variables. Usamos una sentencia condicional y el método length, que signfica longitud, para determinar si tienen la misma cantidad de caracteres. Por medio de otra sentencia condicional, comparamos las dos cadenas en minúsculas y con sus letras en orden alfabético usando el método toLowerCase(), que significa a minúscula, el método split(), que significa partir, el método sort(), que signfica ordenar, y el método join(), que signfica unir. Después mandamos el resultado a la consola.
*/

let cadena1 = "frase";
let cadena2 = "fresa";

if (cadena1.length == cadena2.length) {
  if (cadena1.toLowerCase().split('')
  .sort().join('') == cadena2.toLowerCase().split('')
  .sort().join('')) {
    console.log(`${cadena1} y ${cadena2} son anagramas`);
  } else {
    console.log(`${cadena1} y ${cadena2} no son anagramas`);
  }
} else {
  console.log(`${cadena1} y ${cadena2} no son anagramas`);
}
