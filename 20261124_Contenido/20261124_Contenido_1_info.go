/*
Video: youtube.com/shorts/vMwWNissNVI

Cómo se pueden agregar dos vectores con Go:

Podemos empezar por importar fmt, que significa formato. Almacenamos los vectores en dos variables diferentes. Creamos otra variable para almacenar el vector que tendrá la suma. En un ciclo for, el primer vector y el segundo vector se suman y el resultado se le asigna a la otra variable. Después imprimimos el resultado.
*/

package main

import "fmt"

func main() {
    vectorA := [...]int{1, 2, 3, 4}
    vectorB := [...]int{5, 6, 7, 8}
    var vectorS [4]int

    for i := 0; i < len(vectorA); i++ {
        vectorS[i] = vectorA[i] + vectorB[i]
    }

    fmt.Println(vectorS)
}
