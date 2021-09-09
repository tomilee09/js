// parametros por defecto antes
function miFuncion(nombre, edad, ciudad)
{
    var name = name || 'Tomas'; // en este caso "Tomas" es el ejemplo
    var edad = edad || '21'; // se puede decir como edad vale "la edad ingresada" o el valor por defecto "21"
    var ciudad = ciudad || Linares;
    console.log(nombre, edad, ciudad);
}

// forma actual de poner parametros por defecto
function nuevaFuncion(nombre = "Tomas", edad = "21", ciudad = "Linares")
{
    console.log(nombre, edad, ciudad)
}

nuevaFuncion()
nuevaFuncion("Lorena", "20", "Linares")