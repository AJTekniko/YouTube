/*Cómo se le asignan valores condicionales a una variable en JavaScript:

Usaríamos operadores relacionales y sentencias condicionales. La palabra "if" significa "si", "else" significa "sino", y "else if" es utilizada como una condición que es ejecutada si la condición anterior no resulta ser verdad. Considera el siguiente ejemplo, suponiendo que queremos saber qué clasificación estelar tiene una estrella con una temperatura de 5,778 kelvin, el código compararía la variable con la primer condición. Como no tiene una temperatura mayor o igual que 30,000 kelvin, se sigue a la siguiente, y a la siguiente hasta llegar a la condición correcta. Una vez que la condición resulta ser verdad, manda el valor de la variable a la consola.*/

let temp = 5778;

if (temp >= 30000){
        temp = "O";
} else if (temp >= 10000){
        temp = "B";
} else if (temp >= 7500){
        temp = "A";
} else if (temp >= 6000){
        temp = "F";
} else if (temp >= 5200){
        temp = "G";
} else if (temp >= 3700){
        temp = "K";
} else{
        temp = "M";
}

console.log(temp);
