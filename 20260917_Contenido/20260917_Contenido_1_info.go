/*
Video: youtube.com/shorts/CIraa2amimA

Cómo convertir varios valores a la misma vez en Go:

En videos anteriores, se ha demostrado cómo hacer conversiones básicas de velocidad y temperatura, pero para convertir varios valores a la misma vez, podemos utilizar la función make() y un ciclo for. Considere el siguiente ejemplo, importamos fmt, que es derivado de format y significa formato. Creamos una función personalizada con la fórmula de conversión para convertir una matriz de temperaturas de grados Celsius a Fahrenheit. En la función principal, asignamos las temperaturas a una variable. Utilizamos la función make() para crear una nueva matriz con las temperaturas, la cual va a almacenar los resultados. Creamos un ciclo for para aplicarle la función con la fórmula de conversión a cada elemento. Después imprimimos el resultado.
*/

package main

import "fmt"

func convertir(x int) int {
	return (x * 9/5) + 32
}

func main() {
	celsius := []int{0, 10, 20, 30, 40}
	fahrenheit := make([]int, len(celsius))

	for i, v := range celsius {
		fahrenheit[i] = convertir(v)
	}

	fmt.Println(celsius)   
	fmt.Println(fahrenheit)
}
