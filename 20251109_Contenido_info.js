/*
Cómo producir el mínimo común múltiplo con JavaScript:

Para empezar, podemos crear una función personalizada que acepta dos parámetros proporcionados que son almacenados en forma de números enteros. Son comparados por medio de sentencias condicionales y el más grande es almacenado en una variable. Luego por medio de un ciclo while, una sentencia condicional y el operador módulo determinamos si el número con mayor valor es divisible por ambos números y si no, incrementamos el número por uno hasta llegar a un número que sí es divisible por ambos números, y retornamos el valor. Después simplemente lo mandamos a la consola.
*/

function calculaMCM(x, y) {
    if (x > y) {
        mayor = x
    } else {
        mayor = y
    }
    while(true){
        if(mayor % x == 0 && mayor % y == 0)
            break
        mayor++
    }
    return mayor
}

let mayor;
let numero1 = parseInt(prompt("Por favor escriba el primer número: "), 10);
let numero2 = parseInt(prompt("Por favor escriba el segundo número: "), 10);

console.log(`El mcm de ${numero1} y ${numero2} es ${calculaMCM(numero1, numero2)}`)
