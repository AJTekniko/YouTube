/*
Video: youtube.com/shorts/vwhLAcXMYsw

Cómo saber si un número es par o impar con Go:

Para evaluar un número, utilizamos el operador módulo. Considere el siguiente ejemplo, importamos fmt, que es derivado de format y significa formato. Creamos una variable para almacenar el número que queremos evaluar, y lo dividimos por módulo 2 en una sentencia condicional. Después imprimimos el resultado.
*/

package main

import "fmt"

func main() {
	num := 8

	if num % 2 == 0 {
            fmt.Println("El número es par")
        } else {
            fmt.Println("El número es impar")
        }
}
