"""Cómo saber si una palabra es un palíndromo con Python:

Podemos tomar una palabra y compararla con su versión reversa por medio de sentencias condicionales. Usamos el método lower para tratar con las letras mayúsculas que puede tener la palabra. Para obtener la versión reversa de la palabra, usamos negativo uno como el tercer parámetro al rebanar la cadena de caracteres, lo que efectivamente resulta en que esté al revés. Después simplemente imprimimos el mensaje adecuado."""

palabra = "Reconocer"

if palabra.lower() == palabra[::-1].lower():
    print("La palabra es un palíndromo")
else:
    print("La palabra no es un palíndromo")
