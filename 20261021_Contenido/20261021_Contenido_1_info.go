/*
Video: youtube.com/shorts/N3Wz-GbtjT4

Cómo producir una sucesión de Fibonacci con el ciclo for en Go:

Considere el siguiente ejemplo, importamos fmt, que es derivado de format y significa formato. Almacenamos el número entero que queremos para la sucesión en una variable. Asignamos una variable a cero y otra a uno, las cuales van a servir como los dos primeros números de la sucesión y después también para almacenar los dos números que serán sumados a la variable que tendrá el número que sigue en la sucesión. Utilizamos una sentencia condicional para adaptar los números que imprimimos. El ciclo for se produce con un rango de cero y el numero proporcionado. El ciclo consiste de sumar las dos variables que fueron utilizadas como los primeros números de la sucesión y asignar el resultado a la variable que se creó para almacenar el número que sigue en la sucesión. Después se asigna la primer variable a la segunda, y la segunda a la variable que tiene la suma de las dos variables. Para evitar que otros números sean imprimidos, se crea una sentencia condicional comparando la variable de la suma total con el número proporcionado. Si la suma total es menos o igual que el número proporcionado, imprimimos el valor de la variable que contiene la suma total.
*/

package main

import "fmt"

func main() {
	num := 5
	suma1, suma2 := 0, 1
	proceso := 0

	if num > 1 {
          fmt.Printf("Sucesión de Fibonacci:\n%d\n%d\n", suma1, suma2)
          for i := 0; i < num; i++ {
            proceso = suma1 + suma2
            suma1 = suma2
            suma2 = proceso
            if proceso <= num {
              fmt.Printf("%d\n", proceso)
            }
          }
	} else if num == 1 {
	  fmt.Printf("Sucesión de Fibonacci:\n%d\n%d\n", suma1, suma2)
	} else if num <= 0 {
	  fmt.Printf("Sucesión de Fibonacci:\n%d\n", suma1)
	}
}
