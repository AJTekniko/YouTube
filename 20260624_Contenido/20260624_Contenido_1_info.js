/*
Video: youtube.com/shorts/joUHJ7yL6hk

La sentencia break en JavaScript:

Esta sentencia es utilizada para inmediatamente terminar el ciclo en el que se encuentra la sentencia. Considere el ejemplo que ve en pantalla.
*/

let letras = ["a", "b", "c"];

for (let letra of letras) {
  if (letra == "c") {
    break;
  }
  console.log(letra);
}
