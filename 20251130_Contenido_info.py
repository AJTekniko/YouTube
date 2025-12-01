"""Cómo organizar texto alfabéticamente con Python:

Para empezar, asignamos la frase a una variable. Le aplicamos el método lower y split a la variable con la frase y la pasamos por la función sorted. Asignamos el resultado a otra variable. Creamos una última variable para almacenar el resultado del método join a la variable anterior con espacios. Después simplemente imprimimos."""

frase = "Hola a todos"

palabras = sorted(frase.lower().split())

frase_ordenada = " ".join(palabras)
print(frase_ordenada)
