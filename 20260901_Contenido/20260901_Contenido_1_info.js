/*
Video: youtube.com/shorts/7Hfif4SgNUs

El operador de coalescencia nula en JavaScript:

Este operador retorna el operando del lado derecho si el operando del lado izquierdo es null o undefined. De otro modo, retorna el operando del lado izquierdo. Considere los ejemplos que ve en pantalla.
*/

let ejemplo1 = null ?? "cadena";
console.log(ejemplo1);

let ejemplo2 = 0 ?? 21;
console.log(ejemplo2);
