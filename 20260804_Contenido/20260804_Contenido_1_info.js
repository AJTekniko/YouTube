/*
Video: youtube.com/shorts/Z3_S0jqJV18

Los métodos personalizados en JavaScript:

Estos métodos son definidos en clases personalizadas y pueden ser aplicados a los instantes de esas clases. Considere el ejemplo que ve en pantalla.
*/

class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }

  ladrar() {
    console.log(`${this.nombre} dice guau`);
  }
}
