// hoisting es llamar una funcion antes de que esta sea escrita
// ej:

holaMundo();

function holaMundo() {
    return console.log("Hola mundo!");
}

// si hubiera creado la funcion con var no habria funcionado
// por ejemplo el siguiente codigo daria un error pues no se produciria hoisting
/* 

holaMundo();

var holaMundo = function() {
    return console.log("Hola mundo!");
}

*/