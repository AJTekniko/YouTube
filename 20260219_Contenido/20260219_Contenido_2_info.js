/*
Video: youtube.com/shorts/Ta2WhACJJtg

Cómo encontrar el número proporcionado más grande con JavaScript:

Considera el siguiente ejemplo, empezamos por obtener los números por medio de la función prompt en forma de números y los almacenamos en variables. Se pasan los valores por una serie de sentencias condicionales para comparar los números obtenidos. En el momento que cumple una de las condiciones, mandamos el resultado a la consola.
*/

let num1 = Number(prompt("Por favor escriba el primer número: "));
console.log("Por favor escriba el primer número: ");
console.log(num1);
let num2 = Number(prompt("Por favor escriba el segundo número: "));
console.log("Por favor escriba el segundo número: ");
console.log(num2);
let num3 = Number(prompt("Por favor escriba el tercer número: "));
console.log("Por favor escriba el tercer número: ");
console.log(num3);

if(num1 > num2 && num1 > num3) {
    console.log("El primer número es el más grande");
} else if(num2 > num1 && num2 > num3) {
    console.log("El segundo número es el más grande");
} else {
    console.log("El tercer número es el más grande");
}
