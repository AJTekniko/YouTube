"""
Video: youtube.com/shorts/_bnVnUCCyHQ

Generador de firma de correo electrónico en Python:

Para este reto, queremos producir un generador de firma de correo electrónico que acepta un nombre, un puesto y una compañía, y que retorna una firma de correo electrónico como cadena de caracteres. La cadena debe mostrar el prefijo que depende en la primera letra del nombre, el nombre, el puesto y la compañía. Para nombres que empiezan con letras de la A a la I, el prefijo necesita ser dos corchetes angulares de cierre. Para nombres que empiezan con letras de la J a la R, el prefijo necesita ser dos guiones. Y para nombres que empiezan con letras de la S a la Z, el prefijo necesita ser dos signos de dos puntos. Una coma y un espacio necesita ir después del nombre. Y la palabra " en " rodeada por espacios necesita ir entre el puesto y la compañía. Considere el ejemplo que ve en pantalla.
"""

def generar_firma(nombre, puesto, compania):
    nombre_mod = nombre.strip()
    if not nombre_mod:
        raise ValueError("Necesita tener un nombre.")

    primera_letra = nombre_mod[0].upper()

    if "A" <= primera_letra <= "I":
        prefijo = ">>"
    elif "J" <= primera_letra <= "R":
        prefijo = "--"
    elif "S" <= primer_letra <= "Z":
        prefijo = "::"
    else:
        prefijo = ""

    return f"{prefijo}{nombre_mod}, {puesto.strip()} en {compania.strip()}"

print(generar_firma("Alicia Sánchez", "Ingeniera", "Acme Corp"))
