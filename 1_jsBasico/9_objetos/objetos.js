//creamos un objeto
var objeto = {};
console.log(objeto);

// creemos un objeto mas complejo
var miAuto = {
    marca: 'Toyota',
    year: 2020,
    modelo: 'ultimate',
    infoExtra: function() {
        console.log(`es un auto muy lindo de marca ${this.marca} y modelo ${this.modelo} del año ${this.year}`);
    }
}

// y podemos llamar datos del objeto
console.log(miAuto.marca);
console.log(miAuto.year);
console.log(miAuto.modelo);
console.log(miAuto.infoExtra());

// podemos crear muchos objetos con las funciones constructoras
function construirAuto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

autoJuan = new construirAuto('suzuki', 'jaguar', 2020)
autoPedro = new construirAuto('mazda', 'lion', 2017)
autoTom = new construirAuto('ferrari', 'z', 2021)

console.log(autoTom.marca);