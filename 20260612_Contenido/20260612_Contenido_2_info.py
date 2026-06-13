"""
Video: youtube.com/shorts/kstFwYTuhWY

El ámbito envolvente en Python:

Una función anidada en otra función tiene acceso a las variables de la función externa. Considere el ejemplo que ve en pantalla.
"""

def func_externa():
    num = 7
    
    def func_interna():
        print(num)
    func_interna()

print(func_externa())
