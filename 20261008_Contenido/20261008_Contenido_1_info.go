/*
Video: youtube.com/shorts/SRNOAiUZSaA

Cómo se encuentra el factorial de un número con Go usando recursión:

En el video anterior de Go, demostramos cómo el factorial de un número se puede encontrar utilizando el ciclo for. Sin embargo, también se puede hacer por medio de recursión. Por ejemplo, importamos fmt, que es derivado de format y significa formato. Creamos una función personalizada que determina si el número que queremos evaluar es cero o uno con una sentencia condicional. Si es determinado que el número no es cero o uno, multiplicamos el número proporcionado por si mismo menos uno hasta llegar a uno. En la función principal, almacenamos el número que queremos evaluar en una variable. Después imprimimos el resultado llamando a la primera función.
*/

package main

import "fmt"

func factorial(x int) uint64 {
    if (x == 1 || x == 0) {
        return 1;
    }
    return uint64(x) * factorial(x - 1);
}

func main() {
	num := 5

	fmt.Printf("El factorial de %d es %d\n", num, factorial(num))
}
