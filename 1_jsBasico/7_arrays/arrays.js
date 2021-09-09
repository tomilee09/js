// array es una lista
var impares = [1, 3, 5, 7];
var games = ["aoe2", "cod", "nfs", "mario bros"];

console.log(impares);
console.log(games);

// podemos ver el largo de la lista
console.log(impares.length);
console.log(games.length);

//podemos acceder a cada elemento
console.log(impares[0]);
console.log(games[3]);

// podemos editar nuestros arrays
games.push("golf it");
console.log(games);

// podemos borrar un elemento de una lista
games.pop("golf it");
console.log(games);

// podemos saber la posicion de un elemento
console.log(games.indexOf('aoe2'));