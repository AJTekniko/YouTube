"""
Video: youtube.com/shorts/-r8z40H9iNc

El método discard en Python:

Este método, que significa descartar, puede ser utilizado para eliminar un elemento en un conjunto. A diferencia del método remove(), el método discard() no produce KeyError si el elemento no existe. Considere el ejemplo que ve en pantalla.
"""

letras = set("abbccc")
letras.discard("b")
letras.discard("d")

print(letras)
