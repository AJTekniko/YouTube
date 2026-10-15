/*
Video: youtube.com/shorts/cBrdZBvD4HM

Cómo producir una tabla de multiplicar con Go:

Considere el siguiente ejemplo, importamos fmt, que es derivado de format y significa formato. Almacenamos el número que queremos para la tabla de multiplicar en una variable. Utilizamos un ciclo for con el rango necesario. Después imprimimos el resultado en el formato deseado.
*/

package main

import "fmt"

func main() {
	num := 12

	fmt.Println("Tabla de Multiplicar: ")

	for i := 1; i < 11; i++ {
	  fmt.Printf("%d * %d = %d\n", num, i, num*i)
	}
}
