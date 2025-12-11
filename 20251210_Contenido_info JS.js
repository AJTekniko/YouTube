/*
Cómo combinar dos objetos en JavaScript:

Para empezar, podemos asignar los objetos a su propia variable. Por medio de la sintaxis extendida representada por tres puntos, le asignamos el primer objeto y el segundo objeto a una nueva variable. Después simplemente lo mandamos a la consola.
*/

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {2: 'c', 4: 'd'};
const obj3 = {...obj1, ...obj2};

console.log(obj3);
