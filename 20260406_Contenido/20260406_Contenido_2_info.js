/*
Video: youtube.com/shorts/e6AVaE5uUSM

Cómo convertir una cadena a mayúsculas con JavaScript:

Podemos utilizar el método toUpperCase(), que signfica a mayúsculas, para convertir todos los caracteres a mayúsculas. Si queremos que solamente el primer caracter sea mayúscula, podemos aplicarle el mismo método al carácter que se encuentra en el índice cero y concatenarle el resto de la cadena. Y si queremos que cada palabra empiece con una letra mayúscula, usamos el método split(), que signfica partir, el método map(), que significa mapear, y el método join(), que significa unir. Considere los ejemplos que ve en pantalla.
*/

let cadena = "hola a todos";
console.log(cadena.toUpperCase());

console.log(cadena.charAt(0).toUpperCase() + cadena.slice(1));

console.log(cadena.split(' ')
  .map(palabra => palabra[0].toUpperCase() + palabra.slice(1))
  .join(' '));
