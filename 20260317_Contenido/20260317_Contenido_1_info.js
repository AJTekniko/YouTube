/*
Video: youtube.com/shorts/jsoQiiqzodQ

Cómo retornar varios valores con JavaScript:

Podemos usar una coma para separar los valores en corchetes que queremos retornar después de la palabra clave return. Y luego mandamos los datos en la tupla a la consola por medio de un ciclo for.
*/

function frase() {
  let cadena1 = "Hola";
  let cadena2 = "¿Cómo están?";

  return [cadena1, cadena2];
}

let matriz = frase();
for (let i of matriz) {
    console.log(i);
}
