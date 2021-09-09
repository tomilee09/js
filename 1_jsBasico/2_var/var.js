var edad = 20;
console.log(edad);
edad++;
console.log(edad);

/*

esto es un comentario

dato: en javascript todo se pone con var, no hay que poner float, int, etc...

*/

var float = 1.2345;
console.log(float);

/* podemos hacer cualquier operacion entre floats e ints*/

console.log(float + edad);
console.log(float - edad);
console.log(float * edad);
console.log(float / edad);
console.log((edad+1) % edad);
console.log(edad ** edad);

/* podemos usar un modulo de mates */
console.log(Math.pow(2, 2));
console.log(Math.round(2.7));
console.log(Math.PI);
console.log(Math.random());

// podemos crear cadenas (strings)

var string = 'Hola, buen dia '
var nombre = 'Tomas'
var frase = string + nombre
console.log(frase);
console.log(frase.length);

// podemos llamar letras como si fuera una lista
console.log(frase[0]);
console.log(frase[1]);
console.log(frase[2]);
console.log(frase[3]);

// podemos cambiar las letras que hayan
frase = frase.replace('a', 'o');
console.log(frase);

// podemos llamar a la frase por secciones
console.log(frase.slice(0, 7));

// podemos pasar todo a mayusculas
console.log(frase.toUpperCase());

// o pasar todo a minusculas
console.log(frase.toLowerCase());

// podemos crear una lista
var lista = [1, 2, 3, "hola", "mundo"];

console.log(lista[0]);
console.log(lista[3] + lista[4]);

// se puede hacer un print(f'')
var animal = "leon"
console.log(`hola ${animal}`);