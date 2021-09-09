// lo siguiente será una funcion anidada solamente
const hola = function() 
{
    const palabra1 = "Hola";
    const mundo = function()
    {
        const palabra2 = " mundo!";
        return palabra1 + palabra2;
    }
    return mundo;
}
console.log(hola()());

// lo siguiente será un closure

// closure es una funcion que encapsula una serie de variables 
// y definiciones locales que unicamente serán accecibles
// si son devueltas con el operador return

// con lo anterior se pueden tener variables privadas 
// un closure se usaba antes de la llegada de clases a js
// es una funcion que tiene memoria

const closure_mas_o_menos_una_clase = function() 
{
    let cantidad_dinero = 0;
    
    function aumentar_dinero() 
    {
        return cantidad_dinero++;
    }

    const valor = function()
    {
        return cantidad_dinero;
    }
    return {aumentar_dinero, valor};
};

miDinero = closure_mas_o_menos_una_clase() // aqui estaría creando un objeto de mi clase

miDinero.aumentar_dinero()
console.log(miDinero.valor())