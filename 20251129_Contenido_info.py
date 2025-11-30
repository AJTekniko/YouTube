"""Cómo remover signos de puntuación con Python:

Para empezar, podemos importar el módulo string. Almacenamos la frase original en una variable. Creamos una variable para almacenar el resultado de string.punctuation concatenado con el signo de interrogación inicial y el signo de exclamación inicial. Creamos otra variable para almacenar una cadena de caracteres vacía que va a contener la frase cambiada. Por medio de un ciclo for y una sentencia condicional, le vamos agregando la frase cambiada a la variable más reciente. Después simplemente imprimimos."""

import string

original = "Hola. cómo. están."

puntuacion = string.punctuation + "¿¡"

cambiada = ""

for i in original:
    if i not in puntuacion:
        cambiada += i 

print(cambiada)
