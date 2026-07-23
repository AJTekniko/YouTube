"""
Video: youtube.com/shorts/UeNPE7zxhR4

El método get en Python:

Este método obtiene el valor asociado con una clave. Es similar a la notación de corchetes, excepto que se puede establecer un valor predeterminado, el cual evita que haya errores si no encuentra la clave. Si ningún valor predeterminado se establece, el valor por defecto es None. Considere el ejemplo que ve en pantalla.
"""

letras = dict([(1, "a"),
(2, "b"), (3, "c")])

print(letras.get(1))
