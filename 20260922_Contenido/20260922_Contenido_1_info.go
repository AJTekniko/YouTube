/*
Video: youtube.com/shorts/kDEnvukT4is

Cómo saber si un número es un número primo con Go:

Considere el siguiente ejemplo, importamos fmt, que es derivado de format y significa formato. Creamos una función con una sentencia condicional que descarta el número uno y cualquier número menor que uno, ya que no son considerados números primos. Creamos una sentencia condicional que indica que el número dos es un número primo. Creamos una sentencia condicional que descarta los números pares. Creamos una sentencia condicional para el resto de los números mayores que determina si el numero proporcionado dividido por módulo en forma de cualquier número en el ciclo for iguala 0. Si sí, eso indica que no es un número primo, ya que uno y el número proporcionado no son sus únicos divisores. De otro modo, sí es un número primo. En la función principal, asignamos el valor que queremos evaluar e imprimimos el resultado.
*/

package main

import "fmt"

func esPrimo(num int) bool {
	if num <= 1 {
	  return false
	} else if num == 2 {
	  return true
	} else if num % 2 == 0 {
	  return false
	} else if num > 1 {
	  for i := 2; i < num; i++ {
	    if num % i == 0 {
	      return false
	    } else {
	      return true
	    }
	  }
	}
	return true
}

func main() {
	num := 19

	fmt.Printf("%d es primo: %t\n", num, esPrimo(num))
}
