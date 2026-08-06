/*
Video: youtube.com/shorts/O4iLvgDoBfY

Las instancias de clase en JavaScript:

Las instancias de clase se pueden crear utilizando la palabra clave new y el nombre de la clase. Considere el ejemplo que ve en pantalla.
*/

class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }

  ladrar() {
    console.log(`${this.nombre} dice guau`);
  }
}

const perro = new Perro("el chihuahua");
perro.ladrar();
