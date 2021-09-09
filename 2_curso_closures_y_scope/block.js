const bloques = function() 
{
    if(1)
    {
        var fruit1 = 'apple';
        // let fruit2 = 'banana'; 
        // const fruit3 = 'kiwi';
        // let y const definen las variables por bloque, asi que no estan
        // definidas fuera del if(){...}
    }
    console.log(fruit1);
    //console.log(fruit2);
    //console.log(fruit3);
}
bloques()

// tambien podemos ver esto en ciclos for
// nunca usar var para un for, solo unar let
for(let i = 0; i< 10; i++)
{
    console.log(i);
}