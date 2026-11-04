/*
Video: youtube.com/shorts/LgUXQI1-KlE

Cómo determinar si un número es número narcisista con Go:

Para empezar, importamos fmt, que significa formato, e importamos math, que significa matemática. Creamos una función personalizada que acepta un número entero y retorna un booleano. En esta función, creamos dos variables y les damos un valor de cero a cada una, que almacenarán la suma total de la operación y la cantidad de dígitos en el número. Creamos otra variable y le asignamos un valor temporario del número. Creamos un ciclo for para contar la cantidad de dígitos que tiene su valor temporario. Luego usamos esa misma variable y le volvemos a asignar el valor del número. Creamos un ciclo for para producir la suma de los dígitos elevados a la potencia de la longitud. Luego comparamos la suma con el número. En la función principal, le asignamos el número que queremos evaluar a una variable. Y para terminar, usamos una sentencia condicional para determinar el mensaje que será imprimido. En este ejemplo, determinamos que 153 es igual que 1*1*1 + 5*5*5 + 3*3*3.
*/

package main

import (
    "fmt"
    "math"
)

func esNarcisista(num int) bool {
    suma := 0
    digitos := 0

    temp := num
    for temp != 0 {
        digitos++
        temp /= 10
    }
    
    temp = num
    for temp != 0 {
        digito := temp % 10
        suma += int(math.Pow(float64(digito), float64(digitos)))
        temp /= 10
    }

    return suma == num
}

func main() {
    num := 153

    if esNarcisista(num) {
        fmt.Printf("%d es número narcisista\n", num)
    } else {
        fmt.Printf("%d no es número narcisista\n", num)
    }
}
