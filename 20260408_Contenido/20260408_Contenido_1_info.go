/*
Video: youtube.com/shorts/BHdL3cyxiPY

Cómo convertir un número decimal en un número binario con Go:

Podemos importar fmt y strconv. Creamos una variable para almacenar el número decimal en la función principal. Creamos una variable para almacenar el resultado de usar la función FormatInt(). Después imprimimos el resultado.
*/

package main
import (
    "fmt"
    "strconv"
)

func main() {
    var decimal int64 = 5
    binario := strconv.FormatInt(decimal, 2)
    fmt.Println(binario)
}
