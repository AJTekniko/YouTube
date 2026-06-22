/*
Video: youtube.com/shorts/eqILJ-lczL8

El método splice en JavaScript:

Este método es utilizado para cambiar los elementos de una matriz; puede eliminar, reemplazar y agregar elementos. El primer parámetro indica dónde comenzará el método, el segundo parámetro indica la cantidad de elementos que se eliminarán, y el tercer parámetro y los que siguen indican los elementos que se agregarán a la matriz. Si se omite un segundo argumento o se usa un valor mayor que la longitud de la matriz menos el primer argumento, el método elimina todos los elementos de la matriz desde el primer argumento. Para agregar elementos sin borrar ninguno, se utliza cero o negativo como el segundo argumento. Considere el ejemplo que ve en pantalla.
*/

let letras = ["a", "b", "c"];
letras.splice(3, 0, "d");
console.log(letras);
