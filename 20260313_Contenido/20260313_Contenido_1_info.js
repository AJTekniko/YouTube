/*
Video: youtube.com/shorts/QWBoyipDwog

Cómo retornar una matriz que contiene un término en específico con JavaScript:

Podemos crear una función personalizada que acepta la matriz y el término que se buscará como argumentos. Creamos una variable para almacenar los resultados. Por medio de un ciclo for, comparamos el término con el contenido de la matriz sin distinguir entre mayúsculas y minúsculas. Vamos agregando cada resultado apropiado a la variable que creamos al principio y retornamos el resultado final. Después lo mandamos a la consola. Por cierto, también se puede utilizar el método filter() para lograr lo mismo.
*/

function busqueda(imagen, termino) {
  let resultado = [];
  for (let caso of imagen) {
    if (caso.toLowerCase().includes(termino.toLowerCase())) {
      resultado.push(caso)
    }
  }
    return resultado
}

console.log(busqueda(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"));
