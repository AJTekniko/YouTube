"""
Cómo producir la cantidad de días que faltan para el fin de semana en Python:

Para empezar, podemos importar la clase date del módulo datetime. Creamos una función personalizada que acepta la fecha como cadena de caracteres. Usamos el método fromisoformat y weekday, que producen un número que corresponde al día de la semana. Lo almacenamos a una variable. Al cinco que representa sábado le restamos el resultado de esos dos métodos y lo almacenamos en otra variable. Usamos sentencias condicionales para retornar el mensaje apropiado. Después simplemente imprimimos.
"""

from datetime import date

def obten_dia(cadena_fecha):
    dia = date.fromisoformat(cadena_fecha).weekday()
    fin_de = 5 - dia
    if dia == 5 or dia == 6:
        return "¡Es el fin de semana!"
    elif fin_de == 1:
        return f"Falta {fin_de} día para que sea el fin de semana"
    else:
        return f"Faltan {fin_de} días para que sea el fin de semana"

print(obten_dia("2025-11-14"))
