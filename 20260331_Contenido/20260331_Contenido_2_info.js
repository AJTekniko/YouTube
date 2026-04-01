/*
Video: youtube.com/shorts/cV-VKnSLmrw

Cómo determinar si una cadena es heterograma con JavaScript:

Podemos crear una función personalizada. Creamos  una variable para almacenar los caracteres que obtenemos por medio del método toLowerCase(), que signfica a minúsculas. Usamos el método replace, que significa reemplazar, para eliminar los caracteres que no son letras y almacenamos el resultado en una variable. Creamos otra variable para almacenar un conjunto de la cadena, el cual obtiene las letras únicas. Comparamos la longitud de la cadena con la longitud del conjunto. Después mandamos el resultado a la consola.
*/

function esHeterograma(cadena) {
  let enMinusculas = cadena.toLowerCase();
  let letras = enMinusculas.replace(/[^a-z]/g, '');
  let letrasUnicas = new Set(letras);

  return letrasUnicas.size == letras.length;
}

let cadena1 = "república";
console.log(esHeterograma(cadena1));
