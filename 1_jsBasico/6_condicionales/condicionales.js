var vida = 1;

if(vida === 1) {
    console.log("cuidado, te queda poca vida");
} 
else if(vida > 1) {
    console.log("tranquilo, te queda mucha vida");
}
else {
    console.log('GAME OVER');
}

// tambien podemos crear un condicional con un if y un else en una sola linea

var numero = 1
var resultado = numero===1? "sí":"no"
console.log(resultado);

// tambien  podemos ir por casos discretos con switch()

var edad = 18
switch(edad) {
    case 18:
        console.log('Felicidades!, ya puedes votar');
        break;
    case 17:
        console.log('Aun no puedes votar  :(');
        break;
    case 19:
        console.log('Felicidades!, ya puedes votar hace 1 año');
        break;
    default:
        console.log('ingrese solo un 17, 18 o 19');
}