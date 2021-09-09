var lista = ['azucar', 'manteca', 'levadura', 'sal'];

for(var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// podemos hacer el for de otra forma
for(var elemento in lista) {
    console.log(lista[elemento]);
}

// podemos hacer lo mismo con un while
var i = 0
while(i < lista.length) {
    console.log(lista[i]);
    i++
}