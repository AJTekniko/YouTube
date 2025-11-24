"""FizzBuzz en Python:

FizzBuzz es un ejercicio en el que se requiere obtener los números del uno al cien. Sin embargo, los números divisibles por tres son reemplazados por la palabra "fizz", los números divisibles por cinco son reemplazados por la palabra "buzz", y los números divisibles por ambos son reemplazados por el término "FizzBuzz". Para lograr eso, podemos empezar con un ciclo for con un rango de uno y 101. Por medio de sentencias condicionales y el operador módulo determinamos si el número producido por el ciclo for es divisible por tres y cinco, solamente tres, solamente cinco, o ninguno de los dos. Después simplemente imprimimos lo apropiado."""

for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
