const funcion = function() 
{
    var variable = "holi, soy un var";
    console.log(variable);
}

funcion();
//console.log(variable); no puedo hacer eso porque variable es una variable local

// pero puedo trabajar con var globales y despues en una funcion cambiar su valor
var global = 10;
const func = function()
{
    var global = 100000;
    return global;
}

// modifico el valor global de la variable global
const func2 = function()
{
    global = 3.14;
}

console.log(global); // muestro el valor original
console.log(func()); // muestro la variable local (nueva)
func2()
console.log(global) // muestro la variable original modificada