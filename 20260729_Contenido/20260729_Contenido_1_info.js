/*
Video: youtube.com/shorts/ZCLJE4qlQ4E

La cláusula finally en JavaScript:

Esta cláusula, que significa finalmente, es utilizada para ejecutar código sin importar si hay una excepción. Considere el ejemplo que ve en pantalla.
*/

try {
  console.log(num);
} catch (error) {
  console.error("Ej. de catch"); 
} finally {
  console.log("Ej. de finally");
}
