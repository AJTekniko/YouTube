/*
Video: youtube.com/shorts/Xlz2doI3fMU

Cómo se imprime una cadena de caracteres en forma de número telefónico con Go:

Podemos pasar la cadena de caracteres por una función personalizada, en la cual retornamos la cadena en el formato correcto por medio de la función fmt.Sprintf. Después imprimimos el resultado en la función principal.
*/

package main

import "fmt"

func numTelefono(num string) string {

	return fmt.Sprintf("+%s (%s) %s-%s",
		num[0:1], num[1:4], num[4:7], num[7:])
}

func main() {
	original := "05552340182"
	fmt.Println(numTelefono(original))
}
