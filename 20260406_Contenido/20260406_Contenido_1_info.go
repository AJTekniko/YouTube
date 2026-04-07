/*
Video: youtube.com/shorts/Y2GfIP_UWnk

Cómo convertir un número binario en un número decimal con Go:

Podemos importar fmt y strconv. Creamos una variable para almacenar el número binario en la función principal. Creamos una variable para almacenar el resultado de usar la función ParseInt() y creamos una sentencia condicional para tratar con el error que la función retorna. Después imprimimos el resultado.
*/

package main

import (
	"fmt"
	"strconv"
)

func main() {
	binario := "101"

	decimal, err := strconv.ParseInt(binario, 2, 64)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println(decimal)
}
