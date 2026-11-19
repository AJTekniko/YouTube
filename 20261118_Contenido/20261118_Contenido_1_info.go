/*
Video: youtube.com/shorts/kAGoVMU-mew

Cómo sustituir valores en una cadena de caracteres con Go:

Considera el siguiente ejemplo, si estuvieramos evaluando una hebra de ADN y tuviéramos que producir la hebra complementaria siguiendo las siguientes reglas:
•El ADN consiste de las letras "A", "C", "G", y "T".
•Las letras "A" y "T" se complementan.
•Las letras "C" y "G" se complementan.

¿Cómo le haríamos para que "ACGT" retorne "TGCA"?

Podemos empezar por importar fmt, que significa formato, y strings, que significa cadena de caracteres. Creamos una función personalizada. Creamos una cadena de caracteres que tendrá cada letra sustituida. Usamos un ciclo for con la cadena de caracteres que fue proporcionada como rango, en el cual vamos reemplazando cada letra. Una vez que termina el ciclo, la función retorna la nueva cadena. En la función principal, creamos variables para almacenar la hebra y la hebra complementaria. Después imprimimos el resultado.
*/

package main

import (
	"fmt"
	"strings"
)

func adn(hebra string) string {
	var resultado strings.Builder 

	for _, ch := range hebra {
		char := string(ch) 

		if char == "A" {
			resultado.WriteString("T")
		} else if char == "T" {
			resultado.WriteString("A")
		} else if char == "C" {
			resultado.WriteString("G")
		} else if char == "G" {
			resultado.WriteString("C")
		}
	}

	return resultado.String()
}

func main() {
	hebra := "ACGT"
	hebra_comp := adn(hebra)

	fmt.Println(hebra_comp)
}
