/* javascript es un lenguaje debolmente tipado, por lo que podemos hacer
operaciones que en otros lenguajes darian error
Ejs:
*/
console.log(3+'7', ', y su tipo es', typeof(3+'7'));

console.log(3*'7', ', y su tipo es', typeof(3*'7'));

// a lo que hicimos aqui se le llama "Coercion implicita" (implicitamente cambiar el tipo)
// podemos hacer la coercion explicita

var numero = 20;
numero = String(numero)
console.log(typeof numero)
numero = Number(numero)
console.log(typeof numero)