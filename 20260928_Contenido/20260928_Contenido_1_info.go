/*
Video: youtube.com/shorts/QyZZkABJg5c

Cómo encontrar el número más grande con Go:

Considere el siguiente ejemplo, importamos fmt, que es derivado de format y significa formato. Almacenamos los números en variables. Pasamos los valores por una serie de sentencias condicionales para comparar los números. En el momento que cumple una de las condiciones, imprime el resultado.
*/

package main

import "fmt"

func main() {
	num1 := 5
	num2 := 7
	num3 := 10

	if num1 > num2 && num1 > num3 {
	  fmt.Printf("%d es el más grande\n", num1)
	} else if num2 > num1 && num2 > num3 {
	  fmt.Printf("%d es el más grande\n", num2)
	} else {
	  fmt.Printf("%d es el más grande\n", num3)
	}
}
