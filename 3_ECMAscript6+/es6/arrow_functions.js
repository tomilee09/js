// antes se podian crear funciones de 2 formas
function holi()
{
    console.log("holi");
}
holi();

var holi2 = function()
{
    console.log("holi");
}
holi2()

// con ECMA6 se pueden crear arrow functions (da lo mismo poner const o var para esta explicacion al menos)
const holi3 = () => {
    console.log("holi")
}
holi3()

// puedo poner argumentos
const imprimir_frase = frase => {
    console.log(frase)
}
imprimir_frase("holanda como andamio")

// puedo poner aún más argumentos
const imprimir_frases = (frase1, frase2) => {
    console.log(`${frase1} 
    ${frase2}`)
}
imprimir_frases("holanda como andamio", "yo bien y tu?")

// otro ejemplo
const square = num => num*num
console.log(square(3))