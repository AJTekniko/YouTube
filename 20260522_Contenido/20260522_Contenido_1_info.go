/*
Video: youtube.com/shorts/WexhRe_o5WU

Cómo convertir kilómetros a millas con Go:

Para convertir kilómetros a millas, necesitamos multiplicar el número de kilómetros por 0.621371. Si queremos convertir millas a kilómetros, multiplicamos las millas por 1.609344. Considere el ejemplo que ve en pantalla, importamos fmt, que es derivado de format que significa formato. Creamos una variable para almacenar la velocidad en kilómetros. Multiplicamos la velocidad en kilómetros por el factor de conversión y almacenamos el resultado en otra variable. Después imprimimos el resultado.
*/

package main

import "fmt"

func main() {
	km := 10.0
	mi := km * 0.621371
	fmt.Printf("%.2f km iguala %.2f mi\n", km, mi)
}
