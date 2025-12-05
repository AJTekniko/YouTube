/*Cómo encontrar la palabra más larga con JavaScript:

Para empezar, podemos asignar la frase a una variable. Usamos el método split para partir la frase en palabras individuales y asignar la matriz a una variable. Creamos una variable que va a almacenar la palabra más larga. Creamos un ciclo for para comparar la longitud de cada palabra y asignar la más larga a la variable que se acaba de crear. Después simplemente la mandamos a la consola.*/

let frase = "Encuentra la palabra más larga";

let palabras = frase.split(" ");
let palabraLarga = "";

for(let i = 0; i < palabras.length; i++){
  if(palabras[i].length > palabraLarga.length){
    palabraLarga = palabras[i]
  }
}

console.log(palabraLarga);
