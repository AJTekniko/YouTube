/*
Video: https://www.youtube.com/watch?v=NUV8ltTm4eA

Cómo producir la cantidad de vocales y consonantes de una frase con JavaScript:

Para retornar una matriz que contiene la cantidad de vocales y consonantes de una cadena de caracteres, podemos crear una función personalizada que acepta una cadena como parámetro. Creamos una variable para almacenar el total en una matriz. Creamos dos variables adicionales: una para obtener la cantidad de vocales y la otra para los consonantes. Agregamos esas dos últimas variables a la variable con la matriz y la retornamos. Después simplemente lo mandamos a la consola.
*/

function cuenta(str) {
  let total = [];
  const vocales = str.match(/[aeiou]/gi);
  const consonantes = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  vocales ? total.push(vocales.length) : 0;
  consonantes ? total.push(consonantes.length) : 0;
  
  return total
}

console.log(cuenta("Hola mundo"));
