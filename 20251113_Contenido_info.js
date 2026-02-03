/*
Video: youtube.com/watch?v=sYNw5m_Ph2k

Cómo rotar los contenidos de una matriz en JavaScript:

Para empezar, podemos crear una función personalizada que acepta dos parámetros: la matriz y la cantidad de movimiento. Creamos sentencias condicionales para diferenciar entre rotaciones positivas y negativas. Si es positiva, dividimos la rotación por el módulo de la longitud de la matriz para tratar con rotaciones más grandes que la lista. También le aplicamos un ciclo for, la función shift y la función push a la matriz para que dé la rotación apropiada. Si es negativa, dividimos el valor absoluto de la rotación por el módulo de la longitud de la matriz para tratar con rotaciones más grandes que la lista. También le aplicamos un ciclo for, la función pop y la función unshift a la matriz para que dé la rotación apropiada. Retornamos el resultado. Después simplemente lo mandamos a la consola.
*/

function rotar_matriz(matriz, cambio) {
  if (cambio >= 0) {
    cambio = cambio % matriz.length;
    for (let i = 0; i < cambio; i++) {
    let elemento = matriz.shift();
    matriz.push(elemento);
    }
  }
  else {
    cambio = Math.abs(cambio) % matriz.length;
    for (let i = 0; i < cambio; i++) {
    let elemento = matriz.pop();
    matriz.unshift(elemento);
    }  
  }
  return matriz;
}

console.log(rotar_matriz([1, 2, 3], 1));
