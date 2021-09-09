// para mi esto es más como concatenar, pero weno, imagina quieres unir 2 listas
let humanidades = ["lenguaje", "psicologia", "historia"];
let ciencias = ["mates", "biología", "física"];

// antes 
let array_final = [].concat("holi", humanidades, ciencias)
console.log(array_final)

// despues
let array_ecma6 = ["holi", ...humanidades, ...ciencias] // más orgánico
console.log(array_ecma6);