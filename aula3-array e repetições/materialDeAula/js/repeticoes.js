// REPETIÇÕES
// WHILE (VERIFICA E FAZ)
var contador = 11;
console.log("While");
while (contador <= 10){
    console.log(contador);
    contador++
    let barra = "---------";
    console.log(barra);
}
 
// console.log(barra);

// DO WHILE (FAZ E VERIFICA)
var contador2 = 11;
console.log("DO While");
do {
    console.log(contador2);
    contador2++    
}
while (contador2 <= 10);

// FOR
// for (varivel; condição; controlador){
//     bloco de codigo
//}
console.log("FOR");
for (var contador3 = 10; contador3 >= 0; contador3--){
    console.log(contador3);
}

// WHILE COM LENGTH
var teste = ["ex1", "ex2", "ex2", "ex3", "ex4", "ex5"];
var contador4 = 0;
console.log("WHILE COM LENGTH");
while (contador4 < teste.length){
    console.log(teste[contador4]);
    contador4++
}

// FOR EACH
var cores = ["Vermelho", "Azul", "Amarelo,", "Verde"];
console.log("FOR EACH");

// cores.forEach((element) => console.log(element)); 
//outra forma de fazer.

cores.forEach((element) => {
    console.log(element);
});


