/*
Video: youtube.com/shorts/CbhPueSfj3U

Cómo se encuentra el factorial de un número con Go:

El factorial de un número se puede encontrar utilizando el ciclo for. Por ejemplo, importamos fmt, que es derivado de format y significa formato. Almacenamos el número que queremos evaluar en una variable. Le asignamos el valor de uno a otra variable que será utilizada para ser multiplicada incrementalmente en un ciclo for con el número que queremos evaluar, una vez que es determinado que el número proporcionado no es un cero. Después del ciclo for, imprimimos el resultado.
*/

package main

import "fmt"

func main() {
	num := 5
	factorial := 1;

	if num == 0 {
	  fmt.Printf("El factorial de %d es %d\n", num, factorial)
	} else {
	  for i := 1; i < num + 1; i++ {
	    factorial *= i;
	  }
	  fmt.Printf("El factorial de %d es %d\n", num, factorial)
	}
}
