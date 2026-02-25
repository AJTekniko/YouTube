/*
Video: youtube.com/shorts/A76JyjivVf8

Cómo se encuentra el factorial de un número con JavaScript usando recursión:

En el video anterior, demostramos cómo el factorial de un número se puede encontrar utilizando el ciclo for. Sin embargo, también se puede hacer por medio de recursión. Considera el siguiente ejemplo, obtenemos el número proporcionado y lo almacenamos en una variable. Pasamos el valor de esa variable por una función personalizada que empieza por determinar si el número es cero o uno con una sentencia condicional. Si es determinado que el número no es cero o uno, multiplicamos el número proporcionado por si mismo menos uno hasta llegar a uno. El producto de la función es almacenado en una variable. Después mandamos el resultado a la consola.
*/

function factorial(x) {
    if (x == 1 || x == 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

let numero = Number(prompt("Por favor escriba un número: "));
console.log("Por favor escriba un número: ");
console.log(numero);
let resultado = factorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
