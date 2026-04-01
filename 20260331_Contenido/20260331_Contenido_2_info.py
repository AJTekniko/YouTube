"""
Video: youtube.com/shorts/JH2xjFbUk_Q

Cómo determinar si una cadena es heterograma con Python:

Podemos crear una función personalizada. Por medio de comprensión de lista, el método lower (que es derivado de lowercase que significa minúsculas), y el método isalpha() (que signfica es alfa), obtenemos las letras de la cadena en minúsculas y las almacenamos en una variable. Creamos otra variable para un conjunto de la cadena, el cual obtiene las letras únicas. Comparamos la longitud de la cadena con la longitud del conjunto. Después imprimimos el resultado.
"""

def es_heterograma(cadena):
    letras = [caracter for caracter in
    cadena.lower() if caracter.isalpha()]
    letras_unicas = set(letras)
    return len(letras_unicas) == len(letras)

cadena1 = "república"
print(es_heterograma(cadena1))
