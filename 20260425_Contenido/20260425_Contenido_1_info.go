/*
Video: youtube.com/shorts/_K0FIGRKdBM

Cómo se encuentra la suma de valores posicionales de una cadena con Go:

Podemos importar fmt, que es derivado de format que significa formato, y strings, que signfica cadena de caracteres. Almacenamos la cadena en una variable. Creamos una variable para almacenar la suma de los valores posicionales. Obtenemos una versión en minúsculas de la cadena y la almacenamos una variable. Creamos un ciclo for con la variable que tiene la cadena en minúsculas como rango. En ese ciclo, verificamos que los caracteres sean letras por medio de una sentencia condicional, obtenemos el valor posicional de cada letra, y se lo agregamos a la variable que creamos para la suma de los valores posicionales. Después imprimimos el total.
*/

package main

import (
	"fmt"
	"strings"
)

func main() {
	palabras := "Gracias a todos por su apoyo"
	suma := 0

	minusculas := strings.ToLower(palabras)

	for _, r := range minusculas {
		if r >= 'a' && r <= 'z' {
			posicion := int(r - 'a' + 1)
			suma += posicion
		}
	}

	fmt.Printf("Total: %d", suma)
}
