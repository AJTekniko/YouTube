/*
Video: youtube.com/shorts/50hY-jYIqbc

Cómo se encuentra la suma de unos números proporcionados en Go:

Podemos importar fmt, que es derivado de format que significa formato. Creamos tres variables como enteros para almacenar la cantidad de números que queremos sumar, el número proporcionado que se sumará, y la suma total. Imprimimos un mensaje por medio de la función fmt.Println que le indica al usuario o usuaria que escriba cuántos números quiere sumar. Usamos la función fmt.Scanln para escanear su respuesta y almacenarla en la respectiva variable. Creamos un ciclo for que tiene a la cantidad de números como su rango. En ese ciclo, obtenemos los números proporcionados y los sumamos. Después imprimimos la suma total.
*/

package main

import "fmt"

func main() {
	var cantidad, numero, suma int
	fmt.Println("Por favor escriba cuántos números quiere sumar: ")
	fmt.Scanln(&cantidad)

	for range cantidad {
		fmt.Println("Por favor escriba un número: ")
		fmt.Scanln(&numero)
		suma += numero
	}

	fmt.Printf("Suma: %d\n", suma)
}
