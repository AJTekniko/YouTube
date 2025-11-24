`FizzBuzz en JavaScript:

FizzBuzz es un ejercicio en el que se requiere obtener los números del uno al cien. Sin embargo, los números divisibles por tres son reemplazados por la palabra "fizz", los números divisibles por cinco son reemplazados por la palabra "buzz", y los números divisibles por ambos son reemplazados por el término "FizzBuzz". Para lograr eso, podemos empezar con un ciclo for con un rango de uno y 101. Por medio de sentencias condicionales y el operador módulo determinamos si el número producido por el ciclo for es divisible por tres y cinco, solamente tres, solamente cinco, o ninguno de los dos. Después simplemente mandamos lo apropiado a la consola.`

for (let i = 1; i < 101; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0){
        console.log("Fizz");
    }
    else if (i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
