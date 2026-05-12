/*
Video: youtube.com/shorts/HdvnwrFBxX0

Cómo intercambiar dos variables en Go:

El intercambio de valores sin una variable temporaria se puede lograr asignando las variables a la variable opuesta de la siguiente manera. Después imprimimos el resultado.
*/

package main

import "fmt"

func main() {
	x := 10
	y := 20
	fmt.Printf("Antes del intercambio, 'x' es %d e 'y' es %d.\n", x, y)

	x, y = y, x
	fmt.Printf("Después del intercambio, 'x' es %d e 'y' es %d.", x, y)
}
