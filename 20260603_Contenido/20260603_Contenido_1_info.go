/*
Video: youtube.com/shorts/DyyM3YpAOAg

Cómo evaluar un número para saber si es positivo, negativo o cero con Go:

Para evaluar un número, lo comparamos con cero usando sentencias condicionales. Considere el siguiente ejemplo, importamos fmt, que es derivado de format que significa formato. Creamos una variable para almacenar el número que queremos evaluar, y usamos if, else if y else para hacer la comparación. Después imprimimos el resultado.
*/

package main

import "fmt"

func main() {
	num := 5

	if num > 0 {
            fmt.Println("El número es positivo")
        } else if num < 0 {
            fmt.Println("El número es negativo")
        } else {
            fmt.Println("El número es cero")
        }
}
