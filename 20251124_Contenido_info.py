"""Cómo crear un generador aleatorio de contraseñas en Python:

Para empezar, podemos importar el módulo string y el módulo random. Creamos una lista para almacenar las letras del abecedario producidas con el método ascii_letters en un ciclo for. Hacemos lo mismo para los símbolos y los números con el método punctuation y digits. Obtenemos la cantidad de letras, símbolos y números que quiere el usuario o la usuaria en su contraseña. Creamos una lista para ir almacenando la contraseña. Por medio de ciclos for y el método choice, obtenemos caracteres al azar de las listas que creamos al principio. Usamos el método shuffle para mezclar la lista con la contraseña. Creamos una variable y le asignamos una cadena de caracteres vacía. Esa cadena es para convertir la lista con la contraseña en una cadena de caracteres por medio de un ciclo for. Después simplemente imprimimos."""

import string
import random

letras = []
for i in string.ascii_letters:
    letras.append(i)

simbolos = []
for i in string.punctuation:
    simbolos.append(i)

numeros = []
for i in string.digits:
    numeros.append(i)


print("""¡Bienvenidos al generador aleatorio
de  contraseñas!""")
cuantas_letras = int(input("""¿Cuántas letras quiere usted en su
contraseña?"""))

cuantos_simbolos = int(input("¿Cuántos símbolos quiere?"))

cuantos_numeros = int(input("¿Cuántos números quiere?"))

contrasena_lista = []

for i in range(0, cuantas_letras):
    contrasena_lista += random.choice(letras)

for i in range(0, cuantos_simbolos):
    contrasena_lista += random.choice(simbolos)

for i in range(0, cuantos_numeros):
    contrasena_lista += random.choice(numeros)

random.shuffle(contrasena_lista)

contrasena = ""
for i in contrasena_lista:
    contrasena += i

print(f"""Aquí tiene su contraseña:
{contrasena}""")
