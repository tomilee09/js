// recordar usar solo const o let, var es malo, ver el siguiente video si no se entiende
// https://www.youtube.com/watch?v=bvkY9ey83yY&ab_channel=LaCocinadelC%C3%B3digo
var hello = "Hello";
var hello = "Hella";
let world = "Hello World";
//let world = "Hello Worlda"; da error
const helloWorld = "Hello World!";
//const helloWorld = "Hello World!a"; este era más obvio el error
//console.log(hello);

const anotherFunction = function()
{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();