// nacio let y const, los que reemplazan a var
{
    var hola = "hola"
}
console.log(mundo) // var define todas sus variables como globales 
// asi que no hay problema en imprimirla fuera del bloque en que se
// definió


{
    let mundo = "mundo"
    console.log(mundo) // no puedo usar esta variable fuera de este bloque
}

{
    const mundo = "mundo"
    console.log(mundo) // lo mismo ocurre con const, pero además este 
    // no se puede modificar
}