/*Cómo se encuentra la suma de valores posicionales de una cadena con JavaScript:

En el video anterior, mostramos cómo se encuentra el valor posicional para una letra. Solo como recordatorio, usamos el método charCodeAt(). Si queremos el valor de una cadena, podemos crear una matriz con las letras del abecedario en minúsculas por medio de un ciclo for y el método fromCharCode(). Pasamos la cadena por una función personalizada y la convertimos en minúsculas con el método toLowerCase(). En esa función, declaramos la variable en donde vamos a almacenar el valor de cada letra. Por medio de un ciclo for, obtenemos el valor posicional de las letras. La sentencia condicional es utilizada para asegurar que solo estamos obteniendo el valor de las letras y no otros caracteres. Una vez que el ciclo for termina, la función retorna el valor de la variable. Después simplemente mandamos el resultado a la consola.*/

let letras = [];
for (let i = 97; i < 123; i++) {
  letras.push(String.fromCharCode(i));
}

function cadena(palabras){
  palabras = palabras.toLowerCase();
  let valor = 0;
  for (let i = 0; i < palabras.length; i++){
    if (letras.includes(palabras[i])){
      valor += palabras.charCodeAt(i) - "a".charCodeAt(0) + 1;
    }
  }
  return valor
}

console.log(cadena("Gracias a todos por su apoyo"))
