// mnemotecnia hoisting -> H de helio, el Helio sube
// declaro la variable a normalmente, esto no da error en ningún lenguaje
var a;
a = 2;
console.log(a);

// esto deberia dar error
b = 3.14;
var b;
console.log(b); // da 3.14

// esto es debido al hoisting, "let b;" se "levanta" en el código
// hasta el inicio de este, con lo cual la asignacion b = 3,14; ocurrió
// despues de la inicialización let b;

// con let o const lo anterior no ocurre (otra razón para usarlos)
// con let y const se van a la "temporal dead zone", donde la máquina
// sabe que esas variables existen pero que aun no han sido inicializadas

// el hoisting ocurre con las funciones, toda la función sube
miFuncion() // corro la función antes de definirla, funciona gracias al hoisting
function miFuncion() 
{
    console.log("esto se imprimió antes de definir la función")
}