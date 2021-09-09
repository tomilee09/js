// es como hacer una iteracion pero puedes controlar cuando se hace cada
// iteracion.
// sirve para hacer contadores por ejemplo.
function* fibonacci()
{
    let f1 = 1;
    let f2 = 1;
    while(1)
    {
        let f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        yield f3;
    }
}

const fibonacci_generator = fibonacci();
console.log(fibonacci_generator.next().value)
console.log(fibonacci_generator.next().value)
console.log(fibonacci_generator.next().value)
console.log(fibonacci_generator.next().value)
console.log(fibonacci_generator.next().value)
console.log(fibonacci_generator.next().value)
// la diferencia con un iterador normal es que aqui puedo obtener el 
// resultado del siguiente numero de fibonacci cuando quiera
// Ej: 
console.log("aqui hago otra cosa")
console.log(fibonacci_generator.next().value)