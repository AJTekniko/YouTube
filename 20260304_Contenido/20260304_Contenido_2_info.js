/*
Video: youtube.com/shorts/e8Q-peMP2gU

Cómo se pueden agregar dos matrices con JavaScript:

Podemos empezar con almacenar las matrices en dos variables diferentes. Creamos una variable para almacenar la matriz que tendrá la suma. En un ciclo for, la primera matriz y la segunda matriz se suman y el resultado se le agrega a la otra variable con el método push(). Después mandamos la variable con la suma a la consola.
*/

const matrizA = [1, 2, 3, 4];
const matrizB = [5, 6, 7, 8];
const matrizSuma = [];

for (let i = 0; i < matrizA.length; i++) {
    matrizSuma.push(matrizA[i] + matrizB[i]);
}

console.log(matrizSuma);
