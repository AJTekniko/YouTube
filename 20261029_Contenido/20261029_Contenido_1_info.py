"""
Video: youtube.com/shorts/SSA7g1O5bkE

Organizador de correo electrónico en Python:

Para este reto, queremos crear un organizador de correo electrónico que acepta una lista de correos electrónicos, los organiza alfabéticamente primero con el dominio y luego con el nombre de usario, y retorna una matriz con los correos organizados, manteniendo sus mayúsculas y minúsculas. Podemos crear una función personalizada en la que organizamos la lista usando la función sorted con la clave lambda y el método split para diferenciar entre dominio y nombre de usuario. Asignamos la lista a una variable e imprimimos el resultado de pasar esa variable por la función. Considere el ejemplo que ve en pantalla.
"""

def organizar_correo(correo):
    return sorted(
        correo,
        key=lambda e: (
            e.split('@')[1].lower(),
            e.split('@')[0].lower()
        )
    )

correo = [
    "jill@mail.com",
    "john@example.com",
    "jane@example.com"
]

print(organizar_correo(correo))
