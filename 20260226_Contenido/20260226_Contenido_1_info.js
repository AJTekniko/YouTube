/*
Video: youtube.com/shorts/6vp9uh5ltSg

Cómo producir una sucesión de Fibonacci con el ciclo for en JavaScript:

Obtenemos un número entero proporcionado y lo almacenamos en una variable. Le asignamos cero y uno a dos variables, que funcionan como los dos primeros números de la sucesión y después también para almacenar los dos números que serán sumados a la variable que tendrá el número que sigue en la sucesión. Si el número proporcionado es mayor que uno, utilizamos un ciclo for que empieza con dos y termina cuando es menor o igual al numero proporcionado.  El ciclo consiste de sumar las dos variables que fueron utilizadas como los primeros números de la sucesión y asignar el resultado a la variable que se creó para almacenar el número que sigue en la sucesión. Después se asigna la primer variable a la segunda, y la segunda a la variable que tiene la suma de las dos variables. Para evitar que otros números vayan a la consola, se crea una sentencia condicional que manda a la consola el valor de la variable que contiene la suma total si es menor o igual al número proporcionado. Continuando con las sentencias condicionales originales, si el número proporcionado es uno, manda cero y uno a la consola. Si es cero, manda cero a la consola. Si es menor que cero, manda un mensaje a la consola indicando que el número necesita ser mayor o igual a cero.
*/

let numero = parseInt(prompt("Por favor escriba un número mayor o igual a 0: "));
console.log("Por favor escriba un número mayor o igual a 0: ");
console.log(numero);
let [suma1, suma2] = [0, 1];
let proceso;

if (numero > 1) {
  console.log(`Sucesión de Fibonacci:\n${suma1}\n${suma2}`);
  for (let i = 2; i <= numero; i++) {
    proceso = suma1 + suma2;
    suma1 = suma2;
    suma2 = proceso;
    if (proceso <= numero) {
      console.log(`${proceso}`);
    }
  }
} else if (numero == 1) {
  console.log(`Sucesión de Fibonacci:\n${suma1}\n${suma2}`);
} else if (numero == 0) {
  console.log(`Sucesión de Fibonacci:\n${suma1}`);
} else {
  console.log("Por favor escriba un número mayor o igual a 0");
}
