/*
Video: youtube.com/shorts/VqTpkCLtjV4

El ámbito local en JavaScript:

Una variable que es declarada dentro de una función solo es accesible en esa parte del programa. Considere el ejemplo que ve en pantalla.
*/

function miFunc(){
    let num = 7;
    console.log(num);
}

console.log(num);
