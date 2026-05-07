/*
Video: youtube.com/shorts/Qd54XID-zzM

Cómo se encuentra la raíz cuadrada en Go:

Podemos importar fmt, que es derivado de format que significa formato, y math, que significa matemáticas. Creamos una variable en forma de número flotante. Usamos la función math.Sqrt() para obtener la raíz cuadrada del número flotante y la almacenamos en otra variable. Después imprimimos el resultado.
*/

package main

import (
	"fmt"
	"math"
)

func main() {
	var numero float64 = 100
	resultado := math.Sqrt(numero)
	fmt.Printf("La raíz cuadrada de %.1f es %.1f\n", numero, resultado)
}
