"""
Video: https://www.youtube.com/shorts/eLz-cOn1wwY

Cómo crear un temporizador en Python:

Para empezar, podemos importar el módula time y sys. Creamos una función personalizada. Usamos un ciclo while que seguirá operando mientras el tiempo sea mayor que cero. En ese ciclo, usamos la función divmod() para dividir el tiempo en minutos y segundos y asignarlo a sus respectivas variables. Usamos el método format para tener el tiempo en el formato correcto. Imprimimos con diagonal invertida r en la cadena de caracteres para que cada línea reemplace la anterior, y el parámetro end es modificado para que no mueva la línea para abajo. El método sys.stdout.flush() es utilizado para sacar todos los datos inmediatamente. Usamos la función time.sleep para que el programa se detenga un segundo antes de continuar con el resto del código y le restamos un segundo al tiempo. Una vez que el ciclo while haya terminado, la función imprime un mensaje para indicar que el tiempo ha llegado a cero. Usamos la cláusula try en la cual obtenemos el tiempo y retornamos una indicación de entrada inválida si no es un número entero. También tenemos una sentencia condicional, la cual verifica que el número proporcionado es mayor que cero. Si el número es mayor que cero, la función personalizada es llamada.
"""

import time
import sys

def cuenta(t):
    while t > 0:
        min, seg = divmod(t, 60)
        conteo = '{:02d}:{:02d}'.format(min, seg)
        print(f"\r{conteo}", end="")
        sys.stdout.flush()
        time.sleep(1)
        t -= 1

    print("\nTiempo")

try:
    segundos = int(input("Por favor escriba el tiempo en segundos: "))
    if segundos <= 0:
        print("Por favor escriba un número entero.")
    else:
        cuenta(segundos)
except ValueError:
    print("Entrada inválida. Por favor escriba un número entero.")
