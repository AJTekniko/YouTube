/*
Video: https://youtube.com/shorts/aWtig_6GNFo

Cómo convertir una cantidad de tiempo en horas, minutos y segundos con Go:

Para empezar, importamos fmt, que significa formato. Le asignamos el tiempo que queremos evaluar a una variable. Usamos división y módulo para separar el tiempo en horas, minutos y segundos. Después imprimimos el resultado.
*/

package main

import "fmt"

func main() {
    tiempo := 5555
    h := tiempo / 3600
    m := (tiempo % 3600) / 60
    s := tiempo % 60
    fmt.Printf("%02d:%02d:%02d", h, m, s)
}
