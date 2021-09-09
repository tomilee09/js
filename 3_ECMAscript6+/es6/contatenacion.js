frase1 = "Lorem";
frase2 = "ipsum";

// forma antigua
frase_completa = "Hola wenas, " + frase1 + " " + frase2;
console.log(frase_completa);

// forma nueva, sirve pa poner texto e imprimir variables
frase_completa_es6 = `Hola wenas, ${frase1} ${frase2}` // hay que usar esos corchetes
console.log(frase_completa_es6)