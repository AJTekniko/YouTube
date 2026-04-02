/*
Video: youtube.com/shorts/PHOSR-0ypvM

Cómo determinar si una cadena es pangrama con JavaScript:

Podemos empezar con crear una función personalizada. Creamos una variable en la que almacenamos las letras minúsculas del abecedario que se encuentran en la cadena por medio del método toLowerCase(), que significa a minúsculas, y el método match(), que significa emparejar. Por medio de una sentencia condicional, retornamos un valor booleano que indica si todas las letras del abecedario están presentes en la cadena. Después mandamos el resultado a la consola.
*/

function esPangrama(cadena) {
  let letras = cadena.toLowerCase().match(/[a-z]/g);
  return new Set(letras).size == 26;
}

let frase = "Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol.";

console.log(esPangrama(frase));
