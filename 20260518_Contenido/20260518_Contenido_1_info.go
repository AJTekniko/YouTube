/*
Video: youtube.com/shorts/zqj19hr75D0

Cómo se generan números aleatorios en Go:

Podemos importar fmt, que es derivado de format que significa formato, y math/rand/v2, que es utilizado para generar números pseudoaleatorios. Creamos dos variables para almacenar el rango del número que queremos generar. Generamos el número usando el mínimo más la función rand.IntN con el máximo menos el mínimo como sus argumentos. Después imprimimos el número.
*/

package main

import (
	"fmt"
	"math/rand/v2"
)

func main() {
	min := 1
	max := 10

	numero := min + rand.IntN(max-min)
	fmt.Printf("Número aleatorio generado: %d", numero)
}
