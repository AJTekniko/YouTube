/*
Video: youtube.com/shorts/kd_QghgbHpI

Cómo se le asignan valores condicionales a una variable en Go:

Usamos operadores relacionales y sentencias condicionales. La palabra "if" significa "si", "else if" es utilizada como "sino", y "else" es utilizada como "de otro modo". Considera el siguiente ejemplo, suponiendo que queremos saber qué clasificación estelar tiene una estrella con una temperatura de 5,778 kelvin, comparamos la variable con la primer condición. Como no tiene una temperatura mayor o igual que 30,000 kelvin, se sigue a la siguiente, y a la siguiente hasta llegar a la condición correcta. Una vez que la condición resulta ser verdad, imprimimos la variable.
*/

package main

import "fmt"

func main() {
	temp := 5778
	tipo := ""

	if temp >= 30000 {
		tipo = "O"
	} else if temp >= 10000 {
		tipo = "B"
	} else if temp >= 7500 {
		tipo = "A"
	} else if temp >= 6000 {
		tipo = "F"
	} else if temp >= 5200 {
		tipo = "G"
	} else if temp >= 3700 {
		tipo = "K"
	} else {
		tipo = "M"
	}

	fmt.Println(tipo)
}
