/*
Video: youtube.com/shorts/n7OgT35g5zQ

La sentencia continue en JavaScript:

Esta sentencia es utilizada para terminar la iteración actual de un ciclo y continuar con la siguiente iteración. Considere el ejemplo que ve en pantalla.
*/

let letras = ["a", "b", "c"];

for (let letra of letras) {
  if (letra == "b") {
    continue;
  }
  console.log(letra);
}
