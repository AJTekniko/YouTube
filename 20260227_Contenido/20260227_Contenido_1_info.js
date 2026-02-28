/*
Video: youtube.com/shorts/T76VhJwSEEs

Cómo producir una sucesión de Fibonacci con recursión en JavaScript:

Creamos una función personalizada que toma un número proporcionado. La función consiste de diferentes sentencias condicionales que retornan la suma del valor actual menos uno agregada al valor actual menos dos, 0 y 1 si el valor es 1, y un cero si el valor es cero. Afuera de la función personalizada, si el valor es menor que cero, una sentencia condicional produce un mensaje indicando que el número necesita ser mayor o igual a cero. La sucesión Fibonacci se obtiene con un ciclo for que empieza con 0 e incrementa mientras el número sea menos o igual al número proporcionado. Después de que pasa el valor por la función personalizada, manda el resultado a la consola.
*/
  
let numero = parseInt(prompt("Por favor escriba un número mayor o igual a 0: "));
console.log("Por favor escriba un número mayor o igual a 0: ");
console.log(numero); 

function fibonacci(numero) {
  if (numero > 1) { 
    return fibonacci(numero - 1) + fibonacci(numero - 2);
  } else if (numero == 1) {
    return 0, 1
  } else if (numero == 0) {
    return 0
  }
}   

if (numero < 0) {
    console.log("El número necesita ser mayor o igual a 0");
  }
for (let i = 0; i <= numero; i++) {
    console.log(fibonacci(i));
}
