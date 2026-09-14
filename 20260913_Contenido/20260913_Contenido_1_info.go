/*
Video: youtube.com/shorts/G1Rrqz_iLWI

Cómo saber si un año es bisiesto con Go:

Para determinar si un año es bisiesto, utilizamos el operador módulo en sentencias condicionales. Considere el siguiente ejemplo, importamos fmt, que es derivado de format y significa formato. obtenemos el número que es proporcionado, y lo dividimos por módulo en diferentes condiciones. Después imprimimos el resultado.
*/

package main

import "fmt"

func main() {
	vAnual := 2026

	if vAnual % 100 == 0 && vAnual % 400 == 0 {
            fmt.Println("El año es bisiesto")
        } else if vAnual % 4 == 0 && vAnual % 100 != 0{
            fmt.Println("El año es bisiesto")
        } else {
            fmt.Println("El año no es bisiesto")
        }
}
