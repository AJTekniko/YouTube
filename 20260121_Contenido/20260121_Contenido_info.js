/*
Video: https://www.youtube.com/shorts/TrtDX1G2KKk

Cómo evaluar un número para saber si es positivo, negativo o cero con JavaScript:

Para evaluar si un número es positivo, negativo o cero, lo comparamos con cero usando sentencias condicionales. Considera el siguiente ejemplo, obtenemos el número que es proporcionado, y usamos if, else if y else para hacer la comparación. Después simplemente lo mandamos a la consola.
*/

let numero = Number(prompt("Por favor proporcione un número: "));

console.log("Por favor proporcione un número: ");
console.log(numero);

if (numero > 0){
    console.log("El número es positivo");
} else if (numero < 0){
    console.log("El número es negativo");
} else{
    console.log("El número es cero");
}
