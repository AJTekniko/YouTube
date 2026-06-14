"""
Video: youtube.com/shorts/aQfXr8lodyU

Cómo importar un módulo que se encuentra en otro directorio con Python:

Podemos importarlo usando sys.path. Empezamos con importar sys, en la siguiente línea escribimos sys.path.append con la ruta al directorio entre comillas y paréntesis. Y luego importamos el módulo que queremos usar. Considere el ejemplo que ve en pantalla.
"""

import sys
sys.path.append("../ruta/al/directorio")

import mi_otro_modulo

print(mi_otro_modulo.saludar("compañeros"), "(ej. directorio)")
