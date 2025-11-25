/*Cómo crear un generador aleatorio de contraseñas en JavaScript:

Para empezar, podemos crear una lista para almacenar las letras del abecedario producidas con el método fromCharCode en dos ciclos for: uno para las minúsculas y el otro para las mayúsculas. Hacemos lo mismo para los símbolos y los números. Obtenemos la cantidad de letras, símbolos y números que quiere el usuario o la usuaria en su contraseña. Creamos una lista para ir almacenando la contraseña. Creamos una función personalizada para obtener los valores de las matrices al azar. Usamos esa misma función para mezclar la lista con la contraseña. Creamos una variable y le asignamos una cadena de caracteres vacía. Esa cadena es para convertir la lista con la contraseña en una cadena de caracteres por medio de un ciclo for. Después simplemente mandamos la contraseña a la consola.*/

let letras = [];
for (let i = 97; i < 123; i++) {
  letras.push(String.fromCharCode(i));
}
for (let i = 65; i < 91; i++){
  letras.push(String.fromCharCode(i));
}

let simbolos = [];
for (let i = 33; i < 48; i++) {
    simbolos.push(String.fromCharCode(i));
}
for (let i = 58; i < 65; i++) {
    simbolos.push(String.fromCharCode(i));
}
for (let i = 91; i < 97; i++) {
    simbolos.push(String.fromCharCode(i));
}
for (let i = 123; i < 127; i++) {
    simbolos.push(String.fromCharCode(i));
}

let numeros = [];
for (let i = 48; i < 58; i++) {
  numeros.push(String.fromCharCode(i));
}

console.log(`¡Bienvenidos al generador aleatorio de  contraseñas!`);
let cuantasLetras = Number(prompt(`¿Cuántas letras quiere usted en su
contraseña?`));

let cuantosSimbolos = Number(prompt(`¿Cuántos símbolos quiere?`));

let cuantosNumeros = Number(prompt(`¿Cuántos números quiere?`));

let contrasenaLista = [];

function mezclar(matriz){
    let indiceActual = matriz.length;

    while (indiceActual != 0){
        let indiceAleatorio = Math.floor(Math.random() * indiceActual);
        indiceActual--;

        [matriz[indiceActual], matriz[indiceAleatorio]] = [matriz[indiceAleatorio], matriz[indiceActual]];
    }
}

for (let i = 0; i < cuantasLetras; i++){
    mezclar(letras);
    contrasenaLista.push(letras[i]);
}

for (let i = 0; i < cuantosSimbolos; i++){
    mezclar(simbolos);
    contrasenaLista.push(simbolos[i]);
}
for ( let i = 0; i < cuantosNumeros; i++){
    mezclar(numeros);
    contrasenaLista.push(numeros[i]);
}
mezclar(contrasenaLista);

let contrasena = "";
for (let i = 0; i < contrasenaLista.length; i++){
    contrasena += contrasenaLista[i];
}

console.log(`Aquí tiene su contraseña:
${contrasena}`);
