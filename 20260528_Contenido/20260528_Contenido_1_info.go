/*
Video: youtube.com/shorts/AclVjgLofcE

Cómo convertir grados Celsius a Fahrenheit con Go:

Necesitamos multiplicar el número de grados Celsius por 1.8 y sumarle 32. Si queremos lo contrario, le restamos 32 al número de grados Fahrenheit y lo dividimos por 1.8. Considere el ejemplo que ve en pantalla, importamos fmt, que es derivado de format que significa formato. Creamos una variable para almacenar la temperatura en grados Celsius. Le aplicamos el factor de conversión a la variable en forma de flotante y lo almacenamos en otra variable. Después imprimimos el resultado.
*/

package main

import "fmt"

func main() {
	celsius := 0.0
	fahrenheit := float64(celsius) * 1.8 + 32

	fmt.Printf("La temperatura iguala %.2f grados Fahrenheit", fahrenheit)
}
