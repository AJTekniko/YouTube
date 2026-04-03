/*
Video: youtube.com/shorts/qzVEXR3IF3U

Cómo encontrar la palabra más larga con Go:

Podemos importar fmt, que es derivado de format que significa formato, y strings, que signfica cadena de caracteres. Creamos una función personalizada que acepta y retorna una cadena. Creamos una variable para almacenar las palabras que son divididas en subcadenas por la función Fields(). Creamos una variable en la forma de una cadena. Creamos un ciclo for que pasa por cada palabra de la cadena y la almacena en la última variable que creamos si es más grande que la palabra anterior. La función personalizada retorna la variable con la palabra más larga. En la función principal, almacenamos la cadena que queremos pasar por la función personalizada e imprimimos el resultado.
*/

package main
import (
    "fmt"
    "strings"
)

func palabraMasLarga(frase string) string {
    palabras := strings.Fields(frase)
    var larga string
    for _, palabra := range palabras {
        if len(palabra) > len(larga) {
            larga = palabra
        }
    }
    return larga
}

func main() {
    oracion := "Hola a todos"
    fmt.Println(palabraMasLarga(oracion))
}
