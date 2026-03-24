"""
Video: youtube.com/shorts/fZn-YO6cFD0

Cómo determinar si dos cadenas son anagramas con Python:

Podemos empezar con almacenar las dos cadenas de caracteres en sus respectivas variables. Usamos una sentencia condicional y la función len(), que es derivada de length que signfica longitud, para determinar si tienen la misma cantidad de caracteres. Por medio de otra sentencia condicional, comparamos las dos cadenas en minúsculas y con sus letras en orden alfabético usando el método lower(), que es derivado de lowercase que significa minúscula, y la función sorted(), que signfica ordenado. Después imprimimos el resultado.
"""

cadena1 = "frase"
cadena2 = "fresa"

if len(cadena1) == len(cadena2):
    if sorted(cadena1.lower()) == sorted(cadena2.lower()):
        print(f"{cadena1} y {cadena2} son anagramas")
    else:
        print(f"{cadena1} y {cadena2} no son anagramas")
else:
    print(f"{cadena1} y {cadena2} no son anagramas")
