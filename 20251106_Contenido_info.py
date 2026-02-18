"""
Video: youtube.com/watch?v=i_eadJfxGzk

Cómo determinar el día de la semana con una fecha en Python:

Para empezar, podemos importar la clase datetime del módulo datetime. Por medio de una función personalizada, se puede rebanar la cadena de caracteres con la fecha y almacenar el año, el mes y el día en diferentes variables en forma de números enteros. Con esos valores, se puede determinar el día de la semana utilizando la función datetime y su método strftime, y almacenar el resultado en una variable. Después solo queda retornar la variable con el día de la semana e imprimir.
"""

from datetime import datetime

def obten_dia(cadena_fecha):
    v_anual = int(cadena_fecha[0:4])
    v_mensual = int(cadena_fecha[5:7])
    dia = int(cadena_fecha[8:10])
    dia_de_semana = datetime(v_anual, v_mensual, dia).strftime('%A')
    return dia_de_semana

print(obten_dia("2025-11-06"))
