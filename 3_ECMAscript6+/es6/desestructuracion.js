// imagina tienes una lista y quieres separarla
let lista = [13423, 26754, 396785];

// antes ECMAscript6
let numero1 = lista[0];
let numero2 = lista[1];
let numero3 = lista[2];
console.log(numero1, numero2, numero3);

// despues de ECMAscript6
let [numero4, numero5, numero6] = lista; // esto es lo nuevo
console.log(numero4, numero5, numero6)

// esto tambien se puede con objetos
let datos_persona = 
{
    "nombre": "Tomas",
    "edad": "21",
    "ciudad": "Linares"
}

// antes ECMAscript6, aunque podemos usar otros nombres
let name = datos_persona.nombre;
let age = datos_persona.edad;
let city = datos_persona.ciudad;

console.log(name, age, city);

// despues de ECMAscript6, puedo poner los elementos desordenados
let { edad, nombre, ciudad } =  datos_persona; // esto es lo nuevo, hay que usar el mismo nombre que se le puso dentro de la funcion
console.log(nombre, edad, ciudad);