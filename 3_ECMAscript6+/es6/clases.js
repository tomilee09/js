// sirven para manejar mejor los objetos
// hace que en js se pueda trabajar con la POO
// HAY CURSO POO-JS EN PLATZI
class ciudad {
    constructor(nombre, hombres, mujeres)
    {
        this.nombre = nombre;
        this.hombres = hombres;
        this.mujeres = mujeres;
    }
    cantidad_total_habitantes()
    {
        return this.hombres + this.mujeres;
    }
    que_ciudad()
    {
        console.log(`La ciudad que pide es ${this.nombre}`)
    }
}

const chile = new ciudad("Chile", 10, 20)
console.log(chile.cantidad_total_habitantes())
chile.que_ciudad()