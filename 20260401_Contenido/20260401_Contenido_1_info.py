"""
Video: youtube.com/shorts/vPUAc1hPQPY

Cómo determinar si una cadena es pangrama con Python:

Podemos empezar con importar el módulo string. Creamos una función personalizada. Creamos una variable en la que almacenamos las letras minúsculas del abecedario por medio de la constante de cadena ascii_lowercase. Utilizamos la función set(), que signfica conjunto, y el método issubset(), que significa es subconjunto, para  obtener un valor booleano que indica si todas las letras del abecedario están presentes en la cadena. Después imprimimos el resultado.
"""

import string

def es_pangrama(cadena):
    abecedario = string.ascii_lowercase
    return set(abecedario).issubset(set(cadena.lower()))

frase = "Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol."

print(es_pangrama(frase))
