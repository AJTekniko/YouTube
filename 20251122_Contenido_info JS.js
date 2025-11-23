`
Cómo crear un juego de piedra papel o tijeras en JavaScript:

Para empezar, podemos asignar emojis a tres variables para representar piedra, papel y tijeras. Creamos una lista para contener las tres variables. Obtenemos la jugada, la asignamos a una variable y la mandamos a la consola. Creamos una variable para almacenar la jugada de la computadora basada en un valor aleatorio y la mandamos a la consola para facilitar la comprensión. Creamos una serie de sentencias condicionales para comparar el valor del usuario o de la usuaria y el valor de la computadora siguiendo la lógica del juego. Después simplemente mandamos el resultado a la consola.
`

const piedra = "💎";
const papel = "📰";
const tijeras = "✂";

const imagenes = [piedra, papel, tijeras];

let visitante = Number(prompt(`¿Usted qué elige?
Escriba 0 para piedra, 1 para papel
o 2 para tijeras.`));

if (visitante >= 0 && visitante <= 2){
    console.log(imagenes[visitante]);
}

let computer = Math.floor(Math.random() * 3);
console.log(imagenes[computer]);

if (visitante >= 3 || visitante < 0){
    console.log(`Usted no eligió una opción válida.
Juego terminado`);
}
else if (visitante == 0 && computer == 2){
    console.log("¡Usted ganó!");
}
else if (visitante == 2 && computer == 0){
    console.log("¡Usted perdió!");
}
else if (visitante < computer){
    console.log("¡Usted perdió!");
}
else if (visitante > computer){
    console.log("¡Usted ganó!");
}
else if (visitante == computer){
    console.log("Es un empate");
}
