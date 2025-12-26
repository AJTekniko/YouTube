"""Cómo evaluar el tiempo transcurrido con Python:

Para empezar, importamos el módulo time. Obtenemos el tiempo y lo almacenamos en una variable con la función time. Ejecutamos el resto del código que queremos evaluar. Una vez que se haya terminado de ejecutar el código, obtenemos el tiempo de nuevo y lo almacenamos en otra variable. Después simplemente imprimimos el resultado."""

import time

comienzo = time.time()
print("¿Qué otro tema les gustaría que mencione en mis videos?")
print("Por favor escríbanlo en los comentarios. Gracias.")
final = time.time()
print(f"Tempo transcurrido: {final - comienzo}")
