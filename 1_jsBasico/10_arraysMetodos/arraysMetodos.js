// vamos a crear un array de objetos
var lista = [
    {nombre: 'celu', precio: 100000},
    {nombre: 'tele', precio: 120000},
    {nombre: 'play4', precio: 300000},
    {nombre: 'audifonos', precio: 25000},
    {nombre: 'pc', precio: 500000}
];

// vamos a filtrar el arrays
var listaFiltrada = lista.filter(function(elemento){
    return elemento.precio <= 100000
});
console.log(listaFiltrada);

// podemos llamar solo los nombres
var nombres = lista.map(function(i){
    return i.nombre
});
console.log(nombres);

// podemos buscar un articulo individual
var elementoEspecifico = lista.find(function(elemento){
    return elemento.nombre === 'pc'
});
console.log(elementoEspecifico);

// todos los anteriores creaban un array con los elementos buscados
// el siguiente no lo hará, solo entrega cosas
lista.forEach(function(elemento){
    console.log(elemento.nombre);
});

// podemos ver solamente si existe un producto, some() nos lo dirá
var existenciaPreciosBaratos = lista.some(function(elemento){
    return elemento.precio <= 100000
});
console.log(existenciaPreciosBaratos);