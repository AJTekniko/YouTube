"""
Video: youtube.com/shorts/FAFG1OC5CpY

Cómo eliminar espacios con Python:

Se puede utilizar el método strip(), que en este contexto significa quitar, para eliminar los espacios en ambos extremos de una cadena de caracteres. Si solo queremos remover los espacios del inicio o del final de la cadena, podemos usar lstrip() y rstrip() respectivamente. Considera el siguiente ejemplo, la frase se ve correcta una vez que los espacios al inicio y al final de la primera variable son eliminados.
"""

cadena1 = "     Hola     "
cadena2 = "a todos 🙂"

print(cadena1.lstrip(), cadena2)
print(cadena1.rstrip(), cadena2)
print(cadena1.strip(), cadena2)
