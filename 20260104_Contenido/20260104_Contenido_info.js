/*Cómo se encuentra la raíz cuadrada en JavaScript:

Podemos usar dos asteriscos para obtener la raíz cuadrada de un número. Por ejemplo, si queremos la raíz cuadrada de 100, podemos asignar el número a una variable. Usando la variable, dos asteriscos y 0.5 obtenemos el resultado que podemos almacenar en otra variable. Después simplemente lo mandamos a la consola. También se puede usar el método Math.sqrt() y el método Math.pow() para obtener la raíz cuadrada.*/

let numero = 100;
let raizCuadrada = numero ** 0.5;
console.log(`La raíz cuadrada de ${numero} es: ${raizCuadrada}`);

//let raizCuadrada = Math.sqrt(numero);
//let raizCuadrada = Math.pow(numero, 0.5);
