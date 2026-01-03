/*Cómo crear una matriz en JavaScript:

Para empezar, podemos crear una función personalizada que acepta dos parámetros: el número de filas y el número de columnas. Creamos una variable para almacenar el resultado. Creamos un ciclo for con el número de filas y asignamos el resultado al variable que creamos. Adentro de ese ciclo for, creamos otro ciclo for para poblar la matriz con ceros y asignar el resultado a la variable. Retornamos la matriz. Después simplemente imprimimos.*/

function crea_matriz(filas, columnas) {
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    matriz[i] = [];
    for (let j = 0; j < columnas; j++){
        matriz[i][j] = 0;
      }
  }
  return matriz;

}

console.log(crea_matriz(2, 3))
