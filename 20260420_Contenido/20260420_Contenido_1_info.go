/*
Video: youtube.com/shorts/fs7pXxlpYNY

Cómo se encuentra el valor posicional de una letra con Go:

Para obtener ese valor, podemos utilizar una operación bit a bit. Considere el ejemplo que ve en pantalla, escribimos la letra que queremos, el operador & y el número 31, el cual aísla los últimos cinco bits del valor del carácter y produce el valor posicional sin importar si la letra es mayúscula o minúscula. Después imprimimos el resultado.
*/

package main

import (
	"fmt"
)

func main() {
	fmt.Println('s' & 31)
}
