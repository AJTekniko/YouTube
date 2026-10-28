/*
Video: youtube.com/shorts/I3Sbn9Rf3ok

Cómo producir una sucesión de Fibonacci con recursión en Go:

Considere el siguiente ejemplo, importamos fmt, que es derivado de format y significa formato. Creamos una función personalizada que toma un número entero. La función consiste de diferentes sentencias condicionales que retornan la suma del valor actual menos uno agregada al valor actual menos dos si el valor es mayor o igual que uno, retornan 0 y 1 si el valor es 1, y retornan un cero si el valor es cero. En la función principal, almacenamos en una variable el número al que le queremos producir una sucesión de Fibonacci. La sucesión Fibonacci se obtiene con un ciclo for que empieza con 0 e incrementa mientras el número es menos o igual que el número proporcionado. Después de que pasa el valor por la función personalizada, imprime el resultado.
*/

package main

import "fmt"

func fibonacci(x int) int {
    if x <= 1 {
      return x
    }
    return fibonacci(x-1) + fibonacci(x-2)
}

func main() {
    num := 5
    for i := 0; i <= num; i++ {
        fmt.Printf("%d\n", fibonacci(i))
    }
}
