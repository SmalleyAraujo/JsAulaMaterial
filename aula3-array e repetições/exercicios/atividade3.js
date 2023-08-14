
// 1 - Faça uma listagem de 6 filmes de sua escolha com array e faça eles aparecerem em console.log
var matrix = ["Titulo = Matrix", " Descrição: Lorem"];
var filmes = ["Piratas do Caribe", matrix, "Transformes", "Velozes e Furiosos", "Projeto Extração"];
console.log(filmes);

// 2 - Fazer a tabuada do 8 com repetições
var contador = 0;

console.log("Tabuada do 8 (While)");

while (contador < 10){    
    contador++
    let resultado = 8 * contador;    
    console.log(`${contador} x 8 = ${resultado}`);
    // console.log("8" + " * " + contador + " = " + resultado );
    
}
 
 
// 3 - Fazer as tabuadas de 1 até 10 com repetições

for (var contadorTabuada = 1; contadorTabuada <= 10; contadorTabuada++){
    console.log("---------");
    for (var contadorMultiplica = 1; contadorMultiplica <=10; contadorMultiplica++){
        console.log(`${contadorTabuada} X ${contadorMultiplica} = ${contadorTabuada * contadorMultiplica}`);
    }
}

// TABUADA DO 1 COM DO WHILE
// console.log("Tabuada do 1 (Do While)");
// var contador2 = 0;
// var num1 = 1;
// do {        
//     contador2++
//     let resultado = num1 * contador2;    
//     console.log(num1 + " * " + contador2 + " = " + resultado );   
// }
// while (contador2 < 10);

// TABUADA DO 1 COM DO WHILE
// console.log("Tabuada do 1 (Do While)");
// var contador2 = 0;
// var num1 = 1;
// do {        
//     contador2++
//     let resultado = num1 * contador2;    
//     console.log(num1 + " * " + contador2 + " = " + resultado );   
// }
// while (contador2 < 10);


// // TABUADA DO 2 COM FOR
// console.log("Tabuada do 2 (FOR)");

// for (var contador3 = 1; contador3 <=10; contador3++){
//     var num2 = 2;
//     let resultado = num2 * contador3;    
//     console.log(num2 + " * " + contador3 + " = " + resultado ); 
// }

